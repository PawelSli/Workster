package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.payload.request.BecomeRecruiterRequest;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.payload.response.UserAppliedResponse;
import com.github.pawelsli.workster.service.CandidateService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@CrossOrigin (origins = "*", maxAge = 3600)
@RestController
@RequestMapping ("/candidate")
@Slf4j
public class CandidateController {
    private final CandidateService candidateService;

    @Autowired
    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @GetMapping (value = "/{companyName}")
    public ResponseEntity<?> checkIfCandidate(@PathVariable @NotBlank String companyName) {
        try {
            boolean candidateStatus = candidateService.checkIfCandidate(companyName);

            log.info("Verifying if you applied in {} positively ended", companyName);
            return ResponseEntity.ok(new UserAppliedResponse(candidateStatus));

        } catch (Exception exception) {
            log.error("Verifying if you applied in {} failed. Error: {}", companyName, exception.getMessage());
            return ResponseEntity.badRequest().body(
                    "Verifying if you applied in " + companyName + " failed. Error: " + exception.getMessage());
        }
    }

    @PostMapping (value = "/save/{companyName}")
    public ResponseEntity<?> applyAsRecruiter(@PathVariable @NotBlank String companyName) {
        try {
            candidateService.applyAsRecruiter(companyName);

            log.info("You positively applied for recruiter in company: {}", companyName);
            return ResponseEntity.ok("You positively applied for recruiter in company: " + companyName);
        } catch (Exception exception) {
            log.error("Application for recruiter in {} failed. Error: {}", companyName, exception.getMessage());
            return ResponseEntity.badRequest().body(
                    "Application for recruiter in " + companyName + " failed. Error: " + exception.getMessage());
        }
    }

    @PostMapping (value = "/apply")
    public ResponseEntity<?> acceptUserAsRecruiter(@RequestBody @Valid BecomeRecruiterRequest becomeRecruiterRequest) {
        try {
            candidateService.acceptSomeoneAsRecruiter(becomeRecruiterRequest);

            log.info("Accepting {} as recruiter in {} ended successfully.", becomeRecruiterRequest.getUserName(),
                    becomeRecruiterRequest.getCompanyName());
            return ResponseEntity.ok(new MessageResponse("Accepting " + becomeRecruiterRequest.getUserName() + " as " +
                    "recruiter in " + becomeRecruiterRequest.getCompanyName() + " ended successfully"));

        } catch (Exception exception) {
            log.error("Accepting {} as recruiter in {} failed", becomeRecruiterRequest.getUserName(),
                    becomeRecruiterRequest.getCompanyName());
            return ResponseEntity.badRequest().body(
                    "Accepting " + becomeRecruiterRequest.getUserName() + " as recruiter " +
                            "in " + becomeRecruiterRequest.getCompanyName() + " failed.Error:" + exception.getMessage());
        }
    }

    @PostMapping (value = "/deny")
    public ResponseEntity<?> denyUserAsRecruiter(@RequestBody @Valid BecomeRecruiterRequest becomeRecruiterRequest) {
        try {
            candidateService.denySomeoneAsRecruiter(becomeRecruiterRequest);

            log.info("Deneying {} as recruiter in {} ended successfully.", becomeRecruiterRequest.getUserName(),
                    becomeRecruiterRequest.getCompanyName());
            return ResponseEntity.ok(new MessageResponse("Denying " + becomeRecruiterRequest.getUserName() + " as " +
                    "recruiter in " + becomeRecruiterRequest.getCompanyName() + " ended successfully"));

        } catch (Exception exception) {
            log.error("Denying {} as recruiter in {} failed", becomeRecruiterRequest.getUserName(),
                    becomeRecruiterRequest.getCompanyName());
            return ResponseEntity.badRequest().body(
                    "Denying " + becomeRecruiterRequest.getUserName() + " as recruiter " +
                            "in " + becomeRecruiterRequest.getCompanyName() + " failed.Error:" + exception.getMessage());
        }
    }
}
