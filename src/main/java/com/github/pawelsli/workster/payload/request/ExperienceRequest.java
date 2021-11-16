package com.github.pawelsli.workster.payload.request;

import com.github.pawelsli.workster.domain.ExperienceImpl;
import lombok.Data;

import java.util.List;

@Data
public class ExperienceRequest {
    private List<ExperienceImpl> lisOfExperiences;
}
