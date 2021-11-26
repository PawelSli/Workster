package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.JobOfferImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.Company;
import com.github.pawelsli.workster.entities.JobOffer;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.mapper.JobOfferMapper;
import com.github.pawelsli.workster.payload.request.CreateJobOfferRequest;
import com.github.pawelsli.workster.repositories.CompanyRepository;
import com.github.pawelsli.workster.repositories.JobOfferRepository;
import com.github.pawelsli.workster.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Set;

@Service
public class JobOfferService {

    private final JobOfferRepository jobOfferRepository;
    private final CompanyRepository companyRepository;
    private final UserRepository userRepository;
    private final JobOfferMapper jobOfferMapper;

    @Autowired
    public JobOfferService(JobOfferRepository jobOfferRepository,
                           CompanyRepository companyRepository,
                           UserRepository userRepository,
                           JobOfferMapper jobOfferMapper) {
        this.jobOfferRepository = jobOfferRepository;
        this.companyRepository = companyRepository;
        this.userRepository = userRepository;
        this.jobOfferMapper = jobOfferMapper;
    }

    public void createJobOffer(CreateJobOfferRequest createJobOfferRequest) throws Exception {
        JobOfferImpl jobOfferImpl = createJobOfferRequest.convertToJobOfferImpl();
        JobOffer jobOffer = jobOfferMapper.jobOfferImplToJobOffer(jobOfferImpl);

        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Company company = companyRepository.findByName(createJobOfferRequest.getCompanyName());
        User user = userRepository.findByName(userImpl.getUsername()).orElseThrow(() -> new RuntimeException("There is no such a user!"));

        jobOffer.setCompany(company);
        jobOffer.setCreatedAt(LocalDateTime.now());
        jobOffer.setUser(user);

        user.getPostedJobOffers().add(jobOffer);
        company.getJobOffers().add(jobOffer);

        jobOfferRepository.save(jobOffer);
    }
}
