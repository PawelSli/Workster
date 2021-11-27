package com.github.pawelsli.workster.repositories;

import com.github.pawelsli.workster.entities.Company;
import com.github.pawelsli.workster.entities.JobOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobOfferRepository extends JpaRepository<JobOffer, Long> {

    List<JobOffer> findAllByCompany(Company company);

    JobOffer findByTitle(String title);
}
