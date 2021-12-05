package com.github.pawelsli.workster.repositories;

import com.github.pawelsli.workster.entities.File;
import com.github.pawelsli.workster.entities.JobOffer;
import com.github.pawelsli.workster.entities.JobRequest;
import com.github.pawelsli.workster.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRequestRepository extends JpaRepository<JobRequest, Long> {
    List<JobRequest> findAllByFilesContainingAndUser(File file, User user);

    List<JobRequest> findAllByJobOffer(JobOffer jobOffer);

    Boolean existsByUserAndJobOffer(User user, JobOffer jobOffer);

    JobRequest findByUserAndJobOffer(User user, JobOffer jobOffer);
}
