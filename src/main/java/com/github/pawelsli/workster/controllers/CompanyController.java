package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.domain.CompanyImpl;
import com.github.pawelsli.workster.entities.Company;
import com.github.pawelsli.workster.payload.request.CreateCompanyRequest;
import com.github.pawelsli.workster.payload.response.CompanyDataResponse;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.payload.response.NavigationCompanyListResponse;
import com.github.pawelsli.workster.repositories.CompanyRepository;
import com.github.pawelsli.workster.service.CompanyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin (origins = "*", maxAge = 3600)
@RestController
@RequestMapping ("/company")
@Slf4j
public class CompanyController {
    private final CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    public ResponseEntity<?> getAllCompanies() {
        NavigationCompanyListResponse companyList = companyService.getAllCompanies();

        log.info("Company list retrieved successfully");
        return ResponseEntity.ok(companyList);
    }

    @GetMapping (value = "/public/{name}")
    public ResponseEntity<?> getSpecificCompany(@PathVariable String name) {
        try {
            CompanyDataResponse companyDataResponse = companyService.getSpecificCompanyDate(name);

            log.info("Company data successfully retrieved");
            return ResponseEntity.ok(companyDataResponse);

        } catch (Exception exception) {
            log.warn("Could not retrieved company data. Error: {}", exception.getMessage());
            return ResponseEntity.badRequest().body(
                    "Could not retrieved company data. Error: " + exception.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> createCompany(@RequestParam ("logo") MultipartFile multipartFile,
                                           @Valid @ModelAttribute CreateCompanyRequest createCompanyRequest) {
        if (companyService.checkIfCompanyExistByName(createCompanyRequest.getTitle())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Name of company is already taken!"));
        }
        try {
            companyService.createCompany(createCompanyRequest, multipartFile);

            log.info("Company: {} created successfully", createCompanyRequest.getTitle());
            return ResponseEntity.status(HttpStatus.OK).body(
                    new MessageResponse("Company: " + createCompanyRequest.getTitle() + " created successfully"));
        } catch (Exception exception) {
            log.warn("Could not create company. Error: {}", exception.getMessage());
            return ResponseEntity.badRequest().body(
                    "Could not create company with logo: " + multipartFile.getOriginalFilename() + "!");
        }
    }

}
