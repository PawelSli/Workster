package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.JobOfferImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.Company;
import com.github.pawelsli.workster.entities.JobOffer;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.mapper.JobOfferMapper;
import com.github.pawelsli.workster.mapper.UserMapper;
import com.github.pawelsli.workster.payload.request.CreateJobOfferRequest;
import com.github.pawelsli.workster.payload.response.JobOfferListElementResponse;
import com.github.pawelsli.workster.payload.response.JobOfferListResponse;
import com.github.pawelsli.workster.repositories.CompanyRepository;
import com.github.pawelsli.workster.repositories.JobOfferRepository;
import com.github.pawelsli.workster.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Service
public class JobOfferService {

    private final JobOfferRepository jobOfferRepository;
    private final CompanyRepository companyRepository;
    private final UserRepository userRepository;
    private final JobOfferMapper jobOfferMapper;
    private final UserMapper userMapper;

    @Autowired
    public JobOfferService(JobOfferRepository jobOfferRepository,
                           CompanyRepository companyRepository,
                           UserRepository userRepository,
                           JobOfferMapper jobOfferMapper,
                           UserMapper userMapper) {
        this.jobOfferRepository = jobOfferRepository;
        this.companyRepository = companyRepository;
        this.userRepository = userRepository;
        this.jobOfferMapper = jobOfferMapper;
        this.userMapper = userMapper;
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

    public JobOfferListResponse getAllJobOffers() {
        List<JobOffer> jobOfferList = jobOfferRepository.findAll();
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal.toString().equalsIgnoreCase("anonymousUser")) {
            return new JobOfferListResponse(jobOfferList, null);
        }
        User user = userRepository.findByEmail(((UserImpl) principal).getEmail())
                                  .orElseThrow(() -> new RuntimeException("There is no such a user!"));
        return new JobOfferListResponse(jobOfferList, user);
    }

    public JobOfferListResponse getAllFavouriteJobOffers() {

        User user = userRepository.findByEmail(((UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getEmail())
                                  .orElseThrow(() -> new RuntimeException("There is no such a user!"));
        List<JobOffer> jobOfferList = jobOfferRepository.findAllByFansContaining(user);

        return new JobOfferListResponse(jobOfferList, user);
    }

    public void addJobOfferToFavourites(String jobOfferName) {
        JobOffer jobOffer = jobOfferRepository.findByTitle(jobOfferName);
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("There is no such a user!"));
        if (jobOffer.getUser().equals(user)) {
            throw new RuntimeException("This user created this job offer!");
        }
        user.getFavouriteJobOffers().add(jobOffer);
        jobOffer.getFans().add(user);
        jobOfferRepository.save(jobOffer);
    }

    public void removeJobOfferFromFavourite(String jobOfferName) {
        JobOffer jobOffer = jobOfferRepository.findByTitle(jobOfferName);
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("There is no such a user!"));
        if ((! jobOffer.getFans().contains(user)) || (! user.getFavouriteJobOffers().contains(jobOffer))) {
            throw new RuntimeException("This job offer doesn't belong to this person favourites!");
        }
        if (jobOffer.getUser().equals(user)) {
            throw new RuntimeException("This user created this job offer!");
        }
        jobOffer.getFans().remove(user);
        user.getFavouriteJobOffers().remove(jobOffer);
        jobOfferRepository.save(jobOffer);
    }

    public void deleteJobOffer(String jobOfferName) {
        JobOffer jobOffer = jobOfferRepository.findByTitle(jobOfferName);
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userImpl.getEmail()).orElseThrow(() -> new RuntimeException("There is no such a user!"));
        if (! jobOffer.getUser().equals(user)) {
            throw new RuntimeException("This user doesn't create this job offer!");
        }
        List<User> users = userRepository.findAllByFavouriteJobOffersContaining(jobOffer);
        users.forEach(e -> e.getFavouriteJobOffers().remove(jobOffer));
        Company company = companyRepository.findByName(jobOffer.getCompany().getName());
        company.getJobOffers().remove(jobOffer);
        //TODO: REMEMBER ABOUT APPLICATIONS
        jobOfferRepository.delete(jobOffer);
    }

    public JobOfferListElementResponse getSpecificJobOfferDescription(String jobOfferName) throws Exception {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        JobOffer jobOffer = jobOfferRepository.findByTitle(jobOfferName);
        if (principal.toString().equalsIgnoreCase("anonymousUser")) {
            return JobOfferListResponse.validateJobOfferListElement(jobOffer, null);
        }
        User user = userRepository.findByEmail(((UserImpl) principal).getEmail())
                                  .orElseThrow(() -> new RuntimeException("There is no such a user!"));
        return JobOfferListResponse.validateJobOfferListElement(jobOffer, user);
    }


}
