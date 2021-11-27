package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.payload.request.CreateCompanyRequest;
import com.github.pawelsli.workster.payload.request.CreateJobOfferRequest;
import com.github.pawelsli.workster.payload.response.JobOfferListResponse;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.service.JobOfferService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping (value = "/public")
    public ResponseEntity<?> showAllJobOffers() {
        try {
            JobOfferListResponse jobOfferListResponse = jobOfferService.getAllJobOffers();

            log.info("Getting list of all job offers ended successfully");
            return ResponseEntity.ok(jobOfferListResponse);

        } catch (Exception exception) {
            log.error("Could not get a list of all job offers. Error: {}", exception.getMessage());
            return ResponseEntity.badRequest().body("Could not create job offer. Error: " + exception.getMessage());
        }
    }

    @PostMapping (value = "/favourite/{name}")
    public ResponseEntity<?> addJobOfferToFavourites(@PathVariable String name) {
        try {
            jobOfferService.addJobOfferToFavourites(name);

            log.info("Job offer: {} successfully added to favourites", name);
            return ResponseEntity.ok(new MessageResponse("Job offer: " + name + " successfully added to favourites"));

        } catch (Exception exception) {
            log.error("Could not add job offer: {} to list of favourites", name);
            return ResponseEntity.badRequest().body(new MessageResponse("Could not add job offer: " + name + " to list of favourites."));
        }
    }

    @PostMapping (value = "/favourite/remove/{name}")
    public ResponseEntity<?> removeJobOfferFromFavourites(@PathVariable String name) {
        try {
            jobOfferService.removeJobOfferFromFavourite(name);

            log.info("Job offer: {} successfully removed from favourites", name);
            return ResponseEntity.ok(new MessageResponse("Job offer: " + name + " successfully removed from favourites"));

        } catch (Exception exception) {
            log.error("Could not remove job offer: {} from favourites. Error: {}", name, exception.getMessage());
            return ResponseEntity.badRequest()
                                 .body(new MessageResponse("Could not remove job offer: " + name + " from favourites." + "Error: " + exception.getMessage()));
        }
    }

    @PostMapping (value = "/remove/{name}")
    public ResponseEntity<?> deleteJobOffer(@PathVariable String name) {
        try {
            jobOfferService.deleteJobOffer(name);

            log.info("Job offer: {} successfully deleted.", name);
            return ResponseEntity.ok(new MessageResponse("Job offer: " + name + " successfully deleted."));

        } catch (Exception exception) {
            log.error("Could not delete job offer: {}. Exception: {}", name, exception.getMessage());
            return ResponseEntity.badRequest().body("Could not delete job offer: " + name + ". Exception: " + exception.getMessage());
        }
    }

}
