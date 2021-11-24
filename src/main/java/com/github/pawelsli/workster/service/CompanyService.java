package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.CompanyImpl;
import com.github.pawelsli.workster.domain.JobOfferImpl;
import com.github.pawelsli.workster.domain.RecruiterImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.Company;
import com.github.pawelsli.workster.entities.JobOffer;
import com.github.pawelsli.workster.entities.Recruiter;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.enums.RecruiterRole;
import com.github.pawelsli.workster.mapper.CompanyMapper;
import com.github.pawelsli.workster.mapper.JobOfferMapper;
import com.github.pawelsli.workster.mapper.RecruiterMapper;
import com.github.pawelsli.workster.mapper.UserMapper;
import com.github.pawelsli.workster.payload.request.CreateCompanyRequest;
import com.github.pawelsli.workster.payload.request.ModifyCompanyRequest;
import com.github.pawelsli.workster.payload.response.CompanyDataResponse;
import com.github.pawelsli.workster.payload.response.JobOfferListElementResponse;
import com.github.pawelsli.workster.payload.response.NavigationCompanyListResponse;
import com.github.pawelsli.workster.payload.response.UserImplCandidateDataResponse;
import com.github.pawelsli.workster.repositories.CompanyRepository;
import com.github.pawelsli.workster.repositories.JobOfferRepository;
import com.github.pawelsli.workster.repositories.RecruiterRepository;
import com.github.pawelsli.workster.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CompanyService {
    private final Path root = Paths.get("workster-frontend/public/company-logo");
    private final CompanyRepository companyRepository;
    private final RecruiterRepository recruiterRepository;
    private final JobOfferRepository jobOfferRepository;
    private final UserRepository userRepository;
    private final CompanyMapper companyMapper;
    private final RecruiterMapper recruiterMapper;
    private final JobOfferMapper jobOfferMapper;
    private final UserMapper userMapper;

    @Autowired
    public CompanyService(CompanyRepository companyRepository,
                          RecruiterRepository recruiterRepository,
                          JobOfferRepository jobOfferRepository,
                          UserRepository userRepository,
                          CompanyMapper companyMapper,
                          RecruiterMapper recruiterMapper,
                          JobOfferMapper jobOfferMapper,
                          UserMapper userMapper) {
        this.companyRepository = companyRepository;
        this.recruiterMapper = recruiterMapper;
        this.recruiterRepository = recruiterRepository;
        this.jobOfferRepository = jobOfferRepository;
        this.userRepository = userRepository;
        this.companyMapper = companyMapper;
        this.jobOfferMapper = jobOfferMapper;
        this.userMapper = userMapper;
    }

    public void init() {
        try {
            Files.createDirectory(root);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }
    }

    public void deleteAll() {
        FileSystemUtils.deleteRecursively(root.toFile());
    }

    public boolean checkIfCompanyExistByName(String name) {
        return companyRepository.existsByName(name);
    }

    public CompanyDataResponse getSpecificCompanyDate(String name) throws Exception {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Company company = companyRepository.findByName(name);
        List<JobOfferListElementResponse> jobOffers =
                jobOfferRepository.findAllByCompany(company).stream()
                                  .map(jobOfferMapper::jobOfferToJobOfferImpl)
                                  .map(JobOfferListElementResponse::new)
                                  .collect(Collectors.toList());

        if (principal.toString().equalsIgnoreCase("anonymousUser")) {
            return new CompanyDataResponse(RecruiterRole.NON_RECRUITER, jobOffers, company.getName(),
                                           company.getDescription(), company.getImage());
        }
        User user = userMapper.userImplToUser((UserImpl) principal);
        Optional<Recruiter> companyRecruiter =
                company.getRecruiters().stream().filter(
                        recruiter -> recruiter.getUser().getName().equals(user.getName())).findFirst();

        if (companyRecruiter.isEmpty()) {

            return new CompanyDataResponse(RecruiterRole.NON_RECRUITER, jobOffers, company.getName(),
                                           company.getDescription(), company.getImage());

        } else {

            Map<UserImpl, RecruiterImpl> recruiterList = getRecruitersMap(company);

            switch (companyRecruiter.get().getStatus()) {
                case RECRUITER_BASIC:
                    return new CompanyDataResponse(RecruiterRole.RECRUITER_BASIC,
                                                   recruiterList,
                                                   jobOffers,
                                                   company.getName(),
                                                   company.getDescription(),
                                                   company.getImage());
                case RECRUITER_ADMIN: {
                    List<UserImplCandidateDataResponse> candidates = company.getCandidates().stream()
                                                                            .map(userMapper::userToUserImpl)
                                                                            .map(UserImplCandidateDataResponse::new)
                                                                            .collect(Collectors.toList());

                    return new CompanyDataResponse(RecruiterRole.RECRUITER_ADMIN,
                                                   candidates,
                                                   recruiterList,
                                                   jobOffers,
                                                   company.getName(),
                                                   company.getDescription(),
                                                   company.getImage());
                }
                default:
                    throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED, "This type of recruiter is not implemented!");
            }
        }
    }

    private Map<UserImpl, RecruiterImpl> getRecruitersMap(Company company) {
        List<UserImpl> userList = userRepository.findAllByRecruitersIn(company.getRecruiters()).stream()
                                                .map(userMapper::userToUserImpl)
                                                .collect(Collectors.toList());
        List<RecruiterImpl> recruiterList = company.getRecruiters().stream()
                                                   .map(recruiterMapper::recruiterToRecruiterImpl)
                                                   .collect(Collectors.toList());

        Map<UserImpl, RecruiterImpl> finalMapOfRecruiters = new HashMap<>();
        userList.forEach(user -> {
            RecruiterImpl recruiterForUser = recruiterList.stream()
                                                          .filter(recruiter -> recruiter.getUser().getEmail().equalsIgnoreCase(user.getEmail()))
                                                          .findFirst()
                                                          .orElseThrow(IllegalStateException::new);
            finalMapOfRecruiters.put(user, recruiterForUser);
        });

        return finalMapOfRecruiters;
    }

    public NavigationCompanyListResponse getAllCompanies() {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Recruiter> recruiters = recruiterRepository.findAllByUser(userMapper.userImplToUser(userImpl));
        List<CompanyImpl> companies = recruiters.stream().map(Recruiter::getCompany).map(
                companyMapper::companyToCompanyImpl).collect(Collectors.toList());
        return new NavigationCompanyListResponse(
                companies.stream().map(CompanyImpl::getName).collect(Collectors.toList()));
    }

    public void createCompany(CreateCompanyRequest createCompanyRequest, MultipartFile multipartFile) throws Exception {

        Files.copy(multipartFile.getInputStream(), this.root.resolve(multipartFile.getOriginalFilename()));
        CompanyImpl companyImpl = createCompanyRequest.convertToCompanyImpl(multipartFile.getOriginalFilename());
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Recruiter recruiter = new Recruiter();
        User user = userMapper.userImplToUser(userImpl);
        Company company = companyMapper.companyImplToCompany(companyImpl);

        recruiter.setCompany(company);
        recruiter.setStatus(RecruiterRole.RECRUITER_ADMIN);
        recruiter.setUser(user);

        Set<Recruiter> userRecruiters = Optional.ofNullable(user.getRecruiters()).orElse(new HashSet<>());
        userRecruiters.add(recruiter);
        user.setRecruiters(userRecruiters);

        Set<Recruiter> companyRecruiters = Optional.ofNullable(company.getRecruiters()).orElse(new HashSet<>());
        companyRecruiters.add(recruiter);
        user.setRecruiters(companyRecruiters);

        companyRepository.save(company);
        recruiterRepository.save(recruiter);
    }

    public void modifyCompanyDate(ModifyCompanyRequest modifyCompanyRequest, MultipartFile multipartFile) throws Exception {
        Files.copy(multipartFile.getInputStream(), this.root.resolve(multipartFile.getOriginalFilename()));
        if (! companyRepository.existsByName(modifyCompanyRequest.getPreviousCompanyName())) {
            throw new RuntimeException("Company with name: " + modifyCompanyRequest.getPreviousCompanyName() + " does not exist!");
        }
        Company company = companyRepository.findByName(modifyCompanyRequest.getPreviousCompanyName());

        company = modifyCompanyRequest.modifyCompany(company, multipartFile.getOriginalFilename());
        companyRepository.save(company);
    }
}
