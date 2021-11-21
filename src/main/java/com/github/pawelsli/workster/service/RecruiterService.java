package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.Company;
import com.github.pawelsli.workster.entities.Recruiter;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.enums.RecruiterRole;
import com.github.pawelsli.workster.mapper.UserMapper;
import com.github.pawelsli.workster.payload.request.DeleteUserRequest;
import com.github.pawelsli.workster.repositories.CompanyRepository;
import com.github.pawelsli.workster.repositories.RecruiterRepository;
import com.github.pawelsli.workster.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class RecruiterService {
    private final RecruiterRepository recruiterRepository;
    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final UserMapper userMapper;

    @Autowired
    public RecruiterService(RecruiterRepository recruiterRepository,
                            UserRepository userRepository,
                            CompanyRepository companyRepository,
                            UserMapper userMapper) {
        this.recruiterRepository = recruiterRepository;
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.userMapper = userMapper;
    }

    @PostMapping
    public void deleteUser(DeleteUserRequest deleteUserRequest) throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Company company = companyRepository.findByName(deleteUserRequest.getCompanyName());
        Recruiter thisRecruiter = company.getRecruiters().stream()
                .filter(recruiter -> recruiter.getUser().getName().equalsIgnoreCase(userImpl.getUsername()))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("This user doesn't belong to the company!"));

        if (thisRecruiter.getStatus() == RecruiterRole.RECRUITER_BASIC) {
            throw new RuntimeException("This user is just a basic user!");
        }
        User fallenUser = userRepository.findByName(deleteUserRequest.getRecruiterToDelete())
                .orElseThrow(() -> new RuntimeException("Such user doesn't exist!"));
        Recruiter recruiterToDelete = recruiterRepository.findByUserAndCompany(fallenUser, company);
        fallenUser.getRecruiters().remove(recruiterToDelete);
        userRepository.save(fallenUser);
        company.getRecruiters().remove(recruiterToDelete);
        companyRepository.save(company);
        recruiterRepository.deleteById(recruiterToDelete.getId());
    }

}
