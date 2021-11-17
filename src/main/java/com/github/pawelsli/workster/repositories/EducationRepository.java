package com.github.pawelsli.workster.repositories;

import com.github.pawelsli.workster.entities.Education;
import com.github.pawelsli.workster.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {

    List<Education> findAllByUser(User user);

    void deleteAllByUser(User user);
}
