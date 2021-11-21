package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.domain.EducationImpl;
import com.github.pawelsli.workster.payload.response.EducationResponse;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.service.EducationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/education")
@Slf4j
public class EducationController {
    private final EducationService educationService;

    @Autowired
    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @GetMapping(value = "/public/{name}")
    public ResponseEntity<?> getEducationForUserPublic(@PathVariable String name){
        EducationResponse educationResponse = educationService.getAllUserEducationsPublic(name);

        log.info("Getting list of educations ended successfully");
        return ResponseEntity.ok(educationResponse);
    }

    @GetMapping
    public ResponseEntity<?> getEducationsForUser() {
        EducationResponse educationResponse = educationService.getAllUserEducations();

        log.info("Getting list of educations ended successfully");
        return ResponseEntity.ok(educationResponse);
    }

    @PostMapping(consumes = "application/json")
    public ResponseEntity<?> updateUserEducation(@Valid @RequestBody List<EducationImpl> educationList) {
        educationService.saveUserEducations(educationList);

        log.info("Saving list of educations ended successfully");
        return ResponseEntity.ok(new MessageResponse("Saving list of educations ended successfully"));
    }
}
