package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.payload.request.DeleteUserRequest;
import com.github.pawelsli.workster.payload.request.PromoteUserRequest;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.service.RecruiterService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin (origins = "*", maxAge = 3600)
@RestController
@RequestMapping ("/recruiter")
@Slf4j
public class RecruiterController {
    private final RecruiterService recruiterService;

    @Autowired
    public RecruiterController(RecruiterService recruiterService) {
        this.recruiterService = recruiterService;
    }

    @PostMapping
    public ResponseEntity<?> deleteUser(@Valid @RequestBody DeleteUserRequest deleteUserRequest) {
        try {
            recruiterService.deleteUser(deleteUserRequest);

            log.info("User: {} successfully deleted from company: {}", deleteUserRequest.getRecruiterToDelete(),
                    deleteUserRequest.getCompanyName());
            return ResponseEntity.ok(new MessageResponse("User: " + deleteUserRequest.getRecruiterToDelete() + " " +
                    "successfully deleted from " + deleteUserRequest.getCompanyName() +
                    " company"));
        } catch (Exception exception) {
            log.warn("Could not delete user. Error: {}", exception.getMessage());
            return ResponseEntity.badRequest().body(
                    "Could not delete user. Error: " + exception.getMessage());
        }
    }

    @PostMapping (value = "/promote")
    public ResponseEntity<?> promoteUserToCompanyAdmin(@Valid @RequestBody PromoteUserRequest promoteUserRequest) {
        try {
            recruiterService.promoteUserToCompanyAdmin(promoteUserRequest);

            log.info("User: {} successfully promoted to admin in company: {}",
                    promoteUserRequest.getRecruiterToPromote(), promoteUserRequest.getCompanyName());
            return ResponseEntity.ok(new MessageResponse("User: " + promoteUserRequest.getRecruiterToPromote() + " " +
                    "successfully promoted to admin in company: " + promoteUserRequest.getCompanyName()));
        } catch (Exception exception) {
            log.warn("Could not promote user. Error: {}", exception.getMessage());
            return ResponseEntity.badRequest().body(
                    "Could not promote user. Error: " + exception.getMessage());
        }
    }
}
