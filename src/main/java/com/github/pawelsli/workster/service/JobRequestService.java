package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.File;
import com.github.pawelsli.workster.entities.JobOffer;
import com.github.pawelsli.workster.entities.JobRequest;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.mapper.UserMapper;
import com.github.pawelsli.workster.payload.request.CreateJobRequest;
import com.github.pawelsli.workster.payload.request.SearchJobRequests;
import com.github.pawelsli.workster.payload.response.FileDownloadResponse;
import com.github.pawelsli.workster.payload.response.FilteredListOfUsers;
import com.github.pawelsli.workster.payload.response.JobRequestsListResponse;
import com.github.pawelsli.workster.payload.response.UserApplicationResponse;
import com.github.pawelsli.workster.payload.response.UserAppliedResponse;
import com.github.pawelsli.workster.repositories.FileRepository;
import com.github.pawelsli.workster.repositories.JobOfferRepository;
import com.github.pawelsli.workster.repositories.JobRequestRepository;
import com.github.pawelsli.workster.repositories.UserRepository;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.parser.PdfTextExtractor;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@Service
public class JobRequestService {
    private final String root = "workster-frontend/public/documents";
    private final JobRequestRepository jobRequestRepository;
    private final UserRepository userRepository;
    private final FileRepository fileRepository;
    private final JobOfferRepository jobOfferRepository;
    private final DocumentService documentService;

    @Autowired
    public JobRequestService(JobRequestRepository jobRequestRepository,
                             UserRepository userRepository,
                             FileRepository fileRepository,
                             JobOfferRepository jobOfferRepository,
                             DocumentService documentService) {
        this.jobRequestRepository = jobRequestRepository;
        this.userRepository = userRepository;
        this.fileRepository = fileRepository;
        this.jobOfferRepository = jobOfferRepository;
        this.documentService = documentService;
    }


    public void createJobRequest(Long id, MultipartFile multipartFile, CreateJobRequest createJobRequest) throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("There is no such a user!"));
        JobOffer jobOffer = jobOfferRepository.findById(id).orElseThrow(() -> new RuntimeException("There is no such job offer!"));
        if (jobRequestRepository.existsByUserAndJobOffer(user, jobOffer)) {
            throw new RuntimeException("You already applied for this job offer!");
        }
        if (jobOffer.getUser().equals(user)) {
            throw new RuntimeException("Author of job offer can't apply for job offer!");
        }
        createJobRequest.getFiles().forEach(listElement -> {
            if (fileRepository.findByNameAndUser(listElement, user) == null) {
                throw new RuntimeException("File from a file list doesn't exist!");
            }
        });
        String newFileName = null;
        if (multipartFile != null) {
            newFileName = documentService.createFile(multipartFile);
        }

        JobRequest jobRequest = new JobRequest();
        jobRequest.setDescription(createJobRequest.getMessage());
        jobRequest.setJobOffer(jobOffer);
        jobRequest.setUser(user);
        user.getJobRequests().add(jobRequest);
        jobOffer.getJobRequests().add(jobRequest);
        Set<File> fileSet = new HashSet<>();

        createJobRequest.getFiles().forEach(listElement -> {
            File file = fileRepository.findByNameAndUser(listElement, user);
            fileSet.add(file);
            file.getJobRequests().add(jobRequest);
        });
        if (multipartFile != null) {
            File file = fileRepository.findByNameAndUser(newFileName, user);
            fileSet.add(file);
            file.getJobRequests().add(jobRequest);
        }

        user.getAppliedJobOffers().add(jobOffer);
        jobRequest.setFiles(fileSet);
        jobRequestRepository.save(jobRequest);
    }

    public JobRequestsListResponse getJobRequestsForJobOffer(Long id) {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("There is no such a user!"));
        JobOffer jobOffer = jobOfferRepository.findById(id).orElseThrow(() -> new RuntimeException("There is no such job offer!"));
        if (! jobOffer.getUser().equals(user)) {
            throw new RuntimeException("You are not a recruiter responsible for this job offer!");
        }
        List<JobRequest> jobRequests = jobRequestRepository.findAllByJobOffer(jobOffer);
        return new JobRequestsListResponse(user, jobOffer, jobRequests);
    }

    public FileDownloadResponse downloadFile(Long jobOfferId, String userName, String fileName) throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("Such user doesn't exist!"));
        JobOffer jobOffer = jobOfferRepository.findById(jobOfferId).orElseThrow(() -> new RuntimeException("There is no such job offer!"));
        if (! jobOffer.getUser().equals(user)) {
            throw new RuntimeException("You are not a recruiter!");
        }
        if (! checkIfExist(root + "/" + userName + "/" + fileName)) {
            throw new RuntimeException("Such file doesn't exist!");
        }
        Path path = Paths.get(root + "/" + userName + "/" + fileName);
        byte[] fileContent = Files.readAllBytes(path);
        return new FileDownloadResponse(fileName, fileContent);
    }

    private boolean checkIfExist(String fileRoot) {
        Path path = Paths.get(fileRoot);
        return Files.exists(path);
    }

    public FilteredListOfUsers searchJobRequests(SearchJobRequests searchJobRequests,
                                                 JobRequestsListResponse jobRequestsListResponse) throws Exception {

        List<UserApplicationResponse> searchNewJobRequests = new ArrayList<>();
        searchJobRequests.getUserNames().forEach(userName -> {
            if (checkIfExist(root + "/" + userName)) {
                try (Stream<Path> paths = Files.walk(Paths.get(root + "/" + userName))) {
                    UserApplicationResponse givenUser = jobRequestsListResponse.getUserApplicationResponses()
                                                                               .stream()
                                                                               .filter(userApplicationResponse -> userApplicationResponse.getUsername()
                                                                                                                                         .equalsIgnoreCase(
                                                                                                                                                 userName))
                                                                               .findAny()
                                                                               .orElseThrow(() -> new RuntimeException("Such user doesn't exist!"));

                    paths.filter(Files::isRegularFile)
                         .filter(path -> givenUser.getFiles()
                                                  .stream()
                                                  .anyMatch(fileFromUser -> fileFromUser.equalsIgnoreCase(path.getFileName().toString())))
                         .forEach(path -> {
                             try {
                                 if ((! searchNewJobRequests.contains(givenUser)) && convertDocumentToText(path,
                                         searchJobRequests.getKeyWords())) {
                                     searchNewJobRequests.add(givenUser);
                                 }
                             } catch (Exception e) {
                                 throw new RuntimeException("There is problem with file conversion!");
                             }
                         });

                } catch (IOException exception) {
                    throw new RuntimeException("Such directory doesn't exist!");
                }
            }
        });
        return new FilteredListOfUsers(searchNewJobRequests);
    }

    private boolean convertDocumentToText(Path path, List<String> keyWords) throws Exception {
        if (path.toString().toLowerCase().endsWith(".pdf")) {

            ArrayList<String> pdfPages = new ArrayList<>();
            PdfReader pdfReader = new PdfReader(Files.readAllBytes(path));
            IntStream.range(1, pdfReader.getNumberOfPages()).forEach(number -> {
                try {
                    pdfPages.add(PdfTextExtractor.getTextFromPage(pdfReader, number));
                } catch (IOException e) {
                    throw new RuntimeException("There is problem with pdf page!");
                }
            });
            return pdfPages.stream().anyMatch(page -> keyWords.stream().anyMatch(keyWord -> {
                if (keyWord.contains("&")) {
                    return Arrays.stream(keyWord.split("&"))
                                 .allMatch(partialKeyWord -> page.toLowerCase().contains(partialKeyWord.toLowerCase()));
                }
                return page.toLowerCase().contains(keyWord.toLowerCase());
            }));

        } else if (path.toString().toLowerCase().endsWith(".doc") || path.toString().toLowerCase().endsWith(".docx")) {

            XWPFDocument document = new XWPFDocument(Files.newInputStream(path));
            XWPFWordExtractor extractor = new XWPFWordExtractor(document);
            return keyWords.stream().anyMatch(keyWord -> {
                if (keyWord.contains("&")) {
                    return Arrays.stream(keyWord.split("&"))
                                 .allMatch(partialKeyWord -> extractor.getText().toLowerCase().contains(partialKeyWord.toLowerCase()));
                }
                return extractor.getText().toLowerCase().contains(keyWord.toLowerCase());
            });


        } else {
            throw new RuntimeException("Such file extension is not supported!");
        }
    }
}
