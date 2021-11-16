package com.github.pawelsli.workster.domain;

import com.github.pawelsli.workster.entities.User;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExperienceImpl {
    private Long experienceId;
    private UserImpl user;
    private String title;
    private String company;
    private String location;
    private LocalDate startDate;
    private LocalDate endDate;
    private Boolean stillWork;
}
