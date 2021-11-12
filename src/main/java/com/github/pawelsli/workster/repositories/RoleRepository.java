package com.github.pawelsli.workster.repositories;

import com.github.pawelsli.workster.entities.Role;
import com.github.pawelsli.workster.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(UserRole name);
}
