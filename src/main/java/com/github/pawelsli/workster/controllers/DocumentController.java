package com.github.pawelsli.workster.controllers;

import com.github.pawelsli.workster.payload.response.FileDownloadResponse;
import com.github.pawelsli.workster.payload.response.MessageResponse;
import com.github.pawelsli.workster.payload.response.UserDocumentsResponse;
import com.github.pawelsli.workster.service.DocumentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;

@CrossOrigin (origins = "*", maxAge = 3600)
@RestController
@RequestMapping ("/document")
@Slf4j
class DocumentController {
    private final DocumentService documentService;
    private String[] enabledTypes = {"application/doc", "application/docx","application/msword", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"};

    @Autowired
    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @PostMapping
    public ResponseEntity<?> uploadUserDocument(@RequestParam ("document") MultipartFile multipartFile) {
        if (Arrays.stream(enabledTypes).noneMatch(type -> type.equalsIgnoreCase(multipartFile.getContentType()))) {
            String documentType = multipartFile.getContentType();
            return ResponseEntity.badRequest().body(new MessageResponse("You can only upload documents with doc,docx or pdf extension."));
        }

        try {
            documentService.createFile(multipartFile);

            log.info("User document saved successfully");
            return ResponseEntity.ok(new MessageResponse("User document saved successfully"));
        } catch (Exception exception) {
            log.error("Could not save user document. Error: {}", exception.getMessage());
            return ResponseEntity.badRequest().body(new MessageResponse("Could not save user document. Error: " + exception.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<?> showAllUserDocuments() {
        try {
            UserDocumentsResponse userDocumentsResponse = documentService.getAllUserDocuments();

            log.info("Getting all user documents ended successfully");
            return ResponseEntity.ok(userDocumentsResponse);
        } catch (Exception exception) {
            log.error("Could not get user documents. Error: {}", exception.getMessage());
            return ResponseEntity.badRequest().body("Could not get user documents. Error: " + exception.getMessage());
        }
    }

    @GetMapping (value = "/download/{name}")
    public ResponseEntity<?> downloadFile(@PathVariable String name) {
        try {
            FileDownloadResponse fileDownloadResponse = documentService.downloadFile(name);

            log.info("File: {} downloaded successfully", name);
            return ResponseEntity.ok()
                                 .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDownloadResponse.getFileName() + "\"")
                                 .body(fileDownloadResponse.getContent());
        } catch (Exception exception) {
            log.error("Could not download file: {}. Error: {}", name, exception.getMessage());
            return ResponseEntity.badRequest()
                                 .body(new MessageResponse("Could not download file: " + name + ". Error: " + exception.getMessage()));
        }
    }

    @PostMapping (value = "/delete/{name}")
    public ResponseEntity<?> deleteFile(@PathVariable String name) {
        try {
            documentService.deleteFile(name);

            log.info("File: {} deleted successfully", name);
            return ResponseEntity.ok(new MessageResponse("File: " + name + " deleted successfully"));

        } catch (Exception exception) {
            log.error("Could not delete file: {}. Error: {}", name, exception.getMessage());
            return ResponseEntity.badRequest()
                                 .body(new MessageResponse("Could not delete file: " + name + ". Error: " + exception.getMessage()));
        }
    }
}
