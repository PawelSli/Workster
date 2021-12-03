package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.File;
import com.github.pawelsli.workster.entities.JobRequest;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.mapper.FileMapper;
import com.github.pawelsli.workster.payload.response.FileDownloadResponse;
import com.github.pawelsli.workster.payload.response.UserDocumentsResponse;
import com.github.pawelsli.workster.repositories.FileRepository;
import com.github.pawelsli.workster.repositories.JobRequestRepository;
import com.github.pawelsli.workster.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.stream.Collectors;

@Service
public class DocumentService {
    private final String root = "workster-frontend/public/documents";
    private final FileRepository fileRepository;
    private final UserRepository userRepository;
    private final JobRequestRepository jobRequestRepository;

    @Autowired
    public DocumentService(FileRepository fileRepository, UserRepository userRepository, JobRequestRepository jobRequestRepository) {
        this.fileRepository = fileRepository;
        this.userRepository = userRepository;
        this.jobRequestRepository = jobRequestRepository;
    }

    public void createFile(MultipartFile multipartFile) throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (! checkIfExist(root + "/" + userImpl.getUsername())) {
            Files.createDirectory(Paths.get(root + "/" + userImpl.getUsername()));
        }
        if (checkIfExist(root + "/" + userImpl.getUsername() + "/" + multipartFile.getOriginalFilename())) {
            throw new RuntimeException("This file already exists!");
        }
        File file = new File();
        file.setName(multipartFile.getOriginalFilename());
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("Such user doesn't exist!"));
        file.setUser(user);
        Set<File> fileSet = user.getFiles();
        user.getFiles().add(file);
        fileRepository.save(file);
        Files.copy(multipartFile.getInputStream(), Paths.get(root + "/" + userImpl.getUsername()).resolve(multipartFile.getOriginalFilename()));
    }

    private boolean checkIfExist(String fileRoot) {
        Path path = Paths.get(fileRoot);
        return Files.exists(path);
    }

    public UserDocumentsResponse getAllUserDocuments() throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("Such user doesn't exist!"));
        List<File> fileList = fileRepository.findAllByUser(user);
        Map<String, Long> stringDoubleMap = new TreeMap<>();
        fileList.forEach(file -> {
            try {
                Path path = Paths.get(root + "/" + userImpl.getUsername() + "/" + file.getName());
                stringDoubleMap.put(file.getName(), Files.size(path));
            } catch (IOException e) {
                throw new RuntimeException("File from list of file doesn't exist in real life!");
            }
        });
        return new UserDocumentsResponse(stringDoubleMap);
    }

    public FileDownloadResponse downloadFile(String name) throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("Such user doesn't exist!"));
        if (! checkIfExist(root + "/" + user.getName() + "/" + name)) {
            throw new RuntimeException("Such file doesn't exist!");
        }
        Path path = Paths.get(root + "/" + user.getName() + "/" + name);
        byte[] fileContent = Files.readAllBytes(path);
        return new FileDownloadResponse(name, fileContent);
    }

    public void deleteFile(String fileName) throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("Such user doesn't exist!"));
        if (! checkIfExist(root + "/" + user.getName() + "/" + fileName)) {
            throw new RuntimeException("Such file doesn't exist!");
        }
        File file = fileRepository.findByNameAndUser(fileName, user);
        if (file == null) {
            throw new RuntimeException("No such file!");
        }
        List<JobRequest> jobRequests = jobRequestRepository.findAllByFilesContainingAndUser(file, user);
        if (! jobRequests.isEmpty()) {
            jobRequests.forEach(jobRequest -> {
                jobRequest.getFiles().remove(file);
                if (jobRequest.getFiles().isEmpty()) {
                    jobRequestRepository.delete(jobRequest);
                }
            });
        }
        user.getFiles().remove(file);
        fileRepository.delete(file);
        Path path = Paths.get(root + "/" + user.getName() + "/" + fileName);
        Files.deleteIfExists(path);
    }
}
