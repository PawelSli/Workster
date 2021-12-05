package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.payload.request.CreateCompanyRequest;
import com.github.pawelsli.workster.payload.request.CreateJobOfferRequest;
import com.github.pawelsli.workster.payload.response.JobOfferListElementResponse;
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

    @GetMapping (value = "/favourite/display")
    public ResponseEntity<?> showFavouriteJobOffers() {
        try {
            JobOfferListResponse jobOfferListResponse = jobOfferService.getAllFavouriteJobOffers();

            log.info("Getting list of all favourite job offers ended successfully");
            return ResponseEntity.ok(jobOfferListResponse);

        } catch (Exception exception) {
            log.error("Could not get list of favourite job offers. Error: {}", exception.getMessage());
            return ResponseEntity.badRequest().body("Could not get list of favourite job offers. Error: " + exception.getMessage());
        }
    }

    @GetMapping (value = "/public/{id}")
    public ResponseEntity<?> showCertainJobOfferDescription(@PathVariable Long id) {
        try {
            JobOfferListElementResponse jobOfferListElementResponse = jobOfferService.getSpecificJobOfferDescription(id);

            log.info("Getting job offer: {} ended successfully", id);
            return ResponseEntity.ok(jobOfferListElementResponse);

        } catch (Exception exception) {
            log.error("Could not get job offer: {} description. Error: {}", id, exception.getMessage());
            return ResponseEntity.badRequest()
                                 .body(new MessageResponse("Could not get a job offer: " + id + " description. Error: " + exception.getMessage()));
        }
    }

    @PostMapping (value = "/favourite/{id}")
    public ResponseEntity<?> addJobOfferToFavourites(@PathVariable Long id) {
        try {
            jobOfferService.addJobOfferToFavourites(id);

            log.info("Job offer: {} successfully added to favourites", id);
            return ResponseEntity.ok(new MessageResponse("Job offer: " + id + " successfully added to favourites"));

        } catch (Exception exception) {
            log.error("Could not add job offer: {} to list of favourites. Exception: {}", id, exception.getMessage());
            return ResponseEntity.badRequest()
                                 .body(new MessageResponse("Could not add job offer: " + id + " to list of favourites. Exception: " + exception
                                         .getMessage()));
        }
    }

    @PostMapping (value = "/favourite/remove/{id}")
    public ResponseEntity<?> removeJobOfferFromFavourites(@PathVariable Long id) {
        try {
            jobOfferService.removeJobOfferFromFavourite(id);

            log.info("Job offer: {} successfully removed from favourites", id);
            return ResponseEntity.ok(new MessageResponse("Job offer: " + id + " successfully removed from favourites"));

        } catch (Exception exception) {
            log.error("Could not remove job offer: {} from favourites. Error: {}", id, exception.getMessage());
            return ResponseEntity.badRequest()
                                 .body(new MessageResponse("Could not remove job offer: " + id + " from favourites." + "Error: " + exception.getMessage()));
        }
    }

    @PostMapping (value = "/remove/{id}")
    public ResponseEntity<?> deleteJobOffer(@PathVariable Long id) {
        try {
            jobOfferService.deleteJobOffer(id);

            log.info("Job offer: {} successfully deleted.", id);
            return ResponseEntity.ok(new MessageResponse("Job offer: " + id + " successfully deleted."));

        } catch (Exception exception) {
            log.error("Could not delete job offer: {}. Exception: {}", id, exception.getMessage());
            return ResponseEntity.badRequest().body("Could not delete job offer: " + id + ". Exception: " + exception.getMessage());
        }
    }

}
