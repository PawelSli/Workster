package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.payload.request.ProfileInformationRequest;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.payload.response.ProfileInformationResponse;
import com.github.pawelsli.workster.service.FileStorageService;
import com.github.pawelsli.workster.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

@CrossOrigin (origins = "*", maxAge = 3600)
@RestController
@RequestMapping ("/profile")
@Slf4j
public class UserController {
    private final UserService userService;
    private final FileStorageService fileStorageService;

    @Autowired
    public UserController(UserService userService, FileStorageService fileStorageService) {
        this.userService = userService;
        this.fileStorageService = fileStorageService;
    }

    @GetMapping (value = "/main/{name}")
    public ResponseEntity<?> getProfileByName(@PathVariable String name) {
        ProfileInformationResponse profileInformationResponse = userService.getProfileInformation(name);

        log.info("Retrieving user profile information: {} successfully completed", name);
        return ResponseEntity.ok(profileInformationResponse);
    }

    @GetMapping (value = "/edit-main-information")
    public ResponseEntity<?> getProfileInformation() {
        ProfileInformationResponse profileInformationResponse = userService.getProfileInformationForEditPage();

        log.info("Retrieving user profile information: {} successfully completed",
                profileInformationResponse.getUsername());
        return ResponseEntity.ok(profileInformationResponse);
    }

    @PostMapping (value = "/edit-main-information")
    public ResponseEntity<?> editProfile(@Valid @RequestBody ProfileInformationRequest profileInformationRequest) {
        userService.modifyUser(profileInformationRequest);

        log.info("Updates for user: {} successfully saved", profileInformationRequest.getName());
        return ResponseEntity.ok(new MessageResponse("User main data successfully modified!"));
    }

    @PostMapping (value = "/upload-photo")
    public ResponseEntity<?> uploadPhoto(@RequestParam ("file") MultipartFile multipartFile) {
        String message = "";
        try {
            if (fileStorageService.checkIfExist(multipartFile.getOriginalFilename())) {
                throw new Exception();
            }
            fileStorageService.uploadPhoto(multipartFile);

            log.info("Photo: {} uploaded successfully", multipartFile.getOriginalFilename());
            return ResponseEntity.status(HttpStatus.OK).body(
                    new MessageResponse("Uploaded the file successfully: " + multipartFile.getOriginalFilename()));
        } catch (Exception e) {
            message = "Could not upload the file: " + multipartFile.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
        }
    }
}
