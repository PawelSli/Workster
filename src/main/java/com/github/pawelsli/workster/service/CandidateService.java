package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.Company;
import com.github.pawelsli.workster.entities.Recruiter;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.enums.RecruiterRole;
import com.github.pawelsli.workster.mapper.CompanyMapper;
import com.github.pawelsli.workster.mapper.UserMapper;
import com.github.pawelsli.workster.payload.request.BecomeRecruiterRequest;
import com.github.pawelsli.workster.repositories.CompanyRepository;
import com.github.pawelsli.workster.repositories.RecruiterRepository;
import com.github.pawelsli.workster.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CandidateService {
    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final RecruiterRepository recruiterRepository;
    private final UserMapper userMapper;
    private final CompanyMapper companyMapper;

    @Autowired
    public CandidateService(UserRepository userRepository,
                            CompanyRepository companyRepository,
                            RecruiterRepository recruiterRepository,
                            UserMapper userMapper,
                            CompanyMapper companyMapper) {

        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.recruiterRepository = recruiterRepository;
        this.userMapper = userMapper;
        this.companyMapper = companyMapper;
    }

    public boolean checkIfCandidate(String companyName) throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByName(userImpl.getUsername())
                .orElseThrow(() -> new RuntimeException("There is no such user!"));
        Company company = companyRepository.findByName(companyName);
        return company.getCandidates().stream()
                .anyMatch(candidate -> candidate.equals(user));
    }


    public void applyAsRecruiter(String companyName) {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByName(userImpl.getUsername())
                .orElseThrow(() -> new RuntimeException("There is no such user!"));
        Company company = companyRepository.findByName(companyName);
        Set<User> candidates = company.getCandidates();
        Set<Company> appliedCompanies = user.getCompanySet();
        company.getRecruiters().forEach(recruiter -> {
            if (recruiter.getUser().equals(user)) {
                throw new RuntimeException("This user already belongs to the company!");
            }
        });

        if (candidates.contains(user) || appliedCompanies.contains(company)) {
            throw new RuntimeException("You already applied for this company!");
        }
        candidates.add(user);
        appliedCompanies.add(company);
        companyRepository.save(company);
        userRepository.save(user);
    }

    public void acceptSomeoneAsRecruiter(BecomeRecruiterRequest becomeRecruiterRequest) throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByName(userImpl.getUsername())
                .orElseThrow(() -> new RuntimeException("There is no such user!"));
        Company company = companyRepository.findByName(becomeRecruiterRequest.getCompanyName());
        User userToAccept = userRepository.findByName(becomeRecruiterRequest.getUserName())
                .orElseThrow(() -> new RuntimeException("There is no such user!"));
        Set<Recruiter> recruiterSet = user.getRecruiters();
        Recruiter recruiter = recruiterSet.stream()
                .filter(userRecruiter -> userRecruiter.getCompany().equals(company))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("User that requested this doesn't belong to the company!"));

        if (recruiter.getStatus() != RecruiterRole.RECRUITER_ADMIN) {
            throw new Exception("User that requested this is not an admin!");
        }
        if (!userToAccept.getCompanySet().contains(company)) {
            throw new RuntimeException("This someone doesn't apply for recruiter in the company!");
        }
        if (userToAccept.getRecruiters().stream().anyMatch(userAccRec -> userAccRec.getCompany().equals(company))) {
            throw new RuntimeException("This user already belong to the company");
        }

        Recruiter newRecruiterToSave = new Recruiter();
        newRecruiterToSave.setUser(userToAccept);
        newRecruiterToSave.setCompany(company);
        newRecruiterToSave.setStatus(RecruiterRole.RECRUITER_BASIC);

        Set<Company> companies = userToAccept.getCompanySet();
        companies.remove(company);
        userToAccept.setCompanySet(companies);
        Set<User> candidates = company.getCandidates();
        candidates.remove(userToAccept);
        company.setCandidates(candidates);

        Set<Recruiter> companyRecruiters = company.getRecruiters();
        companyRecruiters.add(newRecruiterToSave);
        company.setRecruiters(companyRecruiters);

        companyRepository.save(company);
        userRepository.save(userToAccept);
    }

    public void denySomeoneAsRecruiter(BecomeRecruiterRequest becomeRecruiterRequest) throws Exception {
        UserImpl userImpl = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByName(userImpl.getUsername())
                .orElseThrow(() -> new RuntimeException("There is no such user!"));
        Company company = companyRepository.findByName(becomeRecruiterRequest.getCompanyName());
        User userToDeny = userRepository.findByName(becomeRecruiterRequest.getUserName())
                .orElseThrow(() -> new RuntimeException("There is no such user!"));
        Set<Recruiter> recruiterSet = user.getRecruiters();
        Recruiter recruiter = recruiterSet.stream()
                .filter(userRecruiter -> userRecruiter.getCompany().equals(company))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("User that requested this doesn't belong to the company!"));

        if (recruiter.getStatus() != RecruiterRole.RECRUITER_ADMIN) {
            throw new Exception("User that requested this is not an admin!");
        }
        if (!userToDeny.getCompanySet().contains(company)) {
            throw new RuntimeException("This someone doesn't apply for recruiter in the company!");
        }
        if (userToDeny.getRecruiters().stream().anyMatch(userAccRec -> userAccRec.getCompany().equals(company))) {
            throw new RuntimeException("This user already belong to the company");
        }

        Set<Company> companies = userToDeny.getCompanySet();
        companies.remove(company);
        userToDeny.setCompanySet(companies);
        Set<User> candidates = company.getCandidates();
        candidates.remove(userToDeny);
        company.setCandidates(candidates);

        companyRepository.save(company);
        userRepository.save(userToDeny);
    }
}
