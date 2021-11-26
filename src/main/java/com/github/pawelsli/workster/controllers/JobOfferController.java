package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.payload.request.CreateCompanyRequest;
import com.github.pawelsli.workster.payload.request.CreateJobOfferRequest;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.service.JobOfferService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

@CrossOrigin (origins = "*", maxAge = 3600)
@RestController
@RequestMapping ("/job-offer")
@Slf4j
public class JobOfferController {
    private final JobOfferService jobOfferService;

    @Autowired
    public JobOfferController(JobOfferService jobOfferService) {
        this.jobOfferService = jobOfferService;
    }

    @PostMapping
    public ResponseEntity<?> createJobOffer(@Valid @ModelAttribute CreateJobOfferRequest createJobOfferRequest) {
        try {
            jobOfferService.createJobOffer(createJobOfferRequest);

            log.info("Job offer: {} created successfully", createJobOfferRequest.getTitle());
            return ResponseEntity.ok(new MessageResponse("Job offer: " + createJobOfferRequest.getTitle() + " created succesfully"));

        } catch (Exception exception) {
            log.error("Could not create job offer. Error: {}", exception.getMessage());
            return ResponseEntity.badRequest().body("Could not create job offer. Error: " + exception.getMessage());
        }
    }

}
