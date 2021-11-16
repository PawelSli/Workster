package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.ExperienceImpl;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ExperienceResponse {

    private List<ExperienceImpl> experienceList;

    public ExperienceResponse(List<ExperienceImpl> experienceList) {
        this.experienceList = experienceList;
    }
}
