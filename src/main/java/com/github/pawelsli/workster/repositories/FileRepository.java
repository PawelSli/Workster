package com.github.pawelsli.workster.repositories;

import com.github.pawelsli.workster.entities.File;
import com.github.pawelsli.workster.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileRepository extends JpaRepository<File, Long> {
    List<File> findAllByUser(User user);

    File findByNameAndUser(String name, User user);
}
