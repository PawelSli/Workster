package com.github.pawelsli.workster.repositories;

import com.github.pawelsli.workster.entities.Company;
import com.github.pawelsli.workster.entities.Recruiter;
import com.github.pawelsli.workster.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByName(String name);

    Optional<User> findByEmail(String email);

    Boolean existsByName(String name);

    Boolean existsByEmail(String email);

    List<User> findAllByRecruitersIn(Set<Recruiter> recruiters);

    List<User> findAllByCompanySetIn(Set<Company> companySet);
}
