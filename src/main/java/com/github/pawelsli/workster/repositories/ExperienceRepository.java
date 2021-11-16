package com.github.pawelsli.workster.repositories;

import com.github.pawelsli.workster.entities.Experience;
import com.github.pawelsli.workster.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {

    List<Experience> findAllByUser(User user);

    void deleteAllByUser(User user);
}
