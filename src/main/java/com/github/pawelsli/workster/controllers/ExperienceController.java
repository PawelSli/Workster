package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.domain.ExperienceImpl;
import com.github.pawelsli.workster.entities.Experience;
import com.github.pawelsli.workster.payload.request.ExperienceRequest;
import com.github.pawelsli.workster.payload.response.ExperienceResponse;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.service.ExperienceService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/experience")
@Slf4j
public class ExperienceController {
    private final ExperienceService experienceService;

    @Autowired
    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @GetMapping
    public ResponseEntity<?> getExperiencesForUser() {
        ExperienceResponse experienceResponse = experienceService.getAllUserExperiences();

        log.info("Getting list of experience ended successfully");
        return ResponseEntity.ok(experienceResponse);
    }

    @PostMapping(consumes = "application/json")
    public ResponseEntity<?> updateUserExperience(@Valid @RequestBody List<ExperienceImpl> experienceList){
        experienceService.saveUserExperiences(experienceList);

        log.info("Saving list of experience ended successfully");
        return ResponseEntity.ok(new MessageResponse("Saving list of experience ended successfully"));
    }
    
}
