package com.github.pawelsli.workster.repositories;

import com.github.pawelsli.workster.entities.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<File,Long> {

}
