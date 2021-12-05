package com.github.pawelsli.workster.controllers;


import com.github.pawelsli.workster.payload.request.CreateJobRequest;
import com.github.pawelsli.workster.payload.request.SearchJobRequests;
import com.github.pawelsli.workster.payload.response.FileDownloadResponse;
import com.github.pawelsli.workster.payload.response.FilteredListOfUsers;
import com.github.pawelsli.workster.payload.response.JobRequestsListResponse;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.service.JobRequestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

@CrossOrigin (origins = "*", maxAge = 3600)
@RestController
@RequestMapping ("/job-request")
@Slf4j
public class JobRequestController {
    private final JobRequestService jobRequestService;

    @Autowired
    public JobRequestController(JobRequestService jobRequestService) {
        this.jobRequestService = jobRequestService;
    }

    @PostMapping (value = "/{id}")
    public ResponseEntity<?> postJobRequest(@PathVariable Long id,
                                            @RequestParam (value = "newFile", required = false) MultipartFile multipartFile,
                                            @Valid @ModelAttribute CreateJobRequest createJobRequest) {
        try {
            jobRequestService.createJobRequest(id, multipartFile, createJobRequest);

            log.info("Job request created successfully for job offer: {}", id);
            return ResponseEntity.ok(new MessageResponse("Job request created successfully for job offer: " + id));
        } catch (Exception exception) {
            log.error("Could not create job request for job offer: {}.Error: {}", id, exception.getMessage());
            return ResponseEntity.badRequest()
                                 .body(new MessageResponse("Could not create job request for job offer: " + id + ".Error: " + exception.getMessage()));
        }
    }

    @GetMapping (value = "/{id}")
    public ResponseEntity<?> getAllJobRequest(@PathVariable Long id) {
        try {
            JobRequestsListResponse jobRequestListResponse = jobRequestService.getJobRequestsForJobOffer(id);

            log.info("Getting all job request for job offer: {} ended successfully", id);
            return ResponseEntity.ok(jobRequestListResponse);

        } catch (Exception exception) {
            log.error("Could not get list of job request for job offer: {}. Error: {}", id, exception.getMessage());
            return ResponseEntity.badRequest()
                                 .body(new MessageResponse("Could not get list of job rquest for job offer: " + id + ". Error: " + exception.getMessage()));
        }
    }

    @GetMapping (value = "/{id}/download/{user}/file/{name}")
    public ResponseEntity<?> downloadApplicantFileFromJobRequest(@PathVariable Long id, @PathVariable String user, @PathVariable String name) {
        try {
            FileDownloadResponse fileDownloadResponse = jobRequestService.downloadFile(id, user, name);

            log.info("File : {} from applicant downloaded successfully", name);
            return ResponseEntity.ok()
                                 .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDownloadResponse.getFileName() + "\"")
                                 .body(fileDownloadResponse.getContent());


        } catch (Exception exception) {
            log.error("Could not download file: {}.Error: {}", name, exception.getMessage());
            return ResponseEntity.badRequest().body("Could not download file: " + name + ".Error: " + exception.getMessage());
        }
    }

    @PostMapping (value = "/search/{id}")
    public ResponseEntity<?> searchUserJobRequests(@PathVariable Long id, @RequestBody @Valid SearchJobRequests searchJobRequests) {
        try {
            JobRequestsListResponse jobRequestListResponse = jobRequestService.getJobRequestsForJobOffer(id);
            FilteredListOfUsers filteredListOfUsers = jobRequestService.searchJobRequests(searchJobRequests,jobRequestListResponse);

            log.info("Filtering job requests ended successfully");
            return ResponseEntity.ok(filteredListOfUsers);
        } catch (Exception exception) {
            log.error("Could not filter job requests");
            return ResponseEntity.badRequest().body("Could not filter job requests");
        }
    }

}
