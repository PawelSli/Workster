package com.github.pawelsli.workster;

import com.github.pawelsli.workster.service.CompanyService;
import com.github.pawelsli.workster.service.FileStorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.Resource;

@SpringBootApplication
public class WorksterApplication {

    public static void main(String[] args) {
        SpringApplication.run(WorksterApplication.class, args);
    }

}
