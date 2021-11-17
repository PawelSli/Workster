package com.github.pawelsli.workster.domain;

import lombok.Data;

import java.time.LocalDate;

@Data
public class EducationImpl {
    private Long educationId;
    private UserImpl user;
    private String title;
    private String school;
    private String location;
    private LocalDate startDate;
    private LocalDate endDate;
    private Boolean stillEducate;
}
