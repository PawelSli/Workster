package com.github.pawelsli.workster.repositories;

import com.github.pawelsli.workster.entities.Company;
import com.github.pawelsli.workster.entities.Recruiter;
import com.github.pawelsli.workster.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter, Long> {
    List<Recruiter> findAllByUser(User user);

    Recruiter findByUserAndCompany(User user, Company company);
}
