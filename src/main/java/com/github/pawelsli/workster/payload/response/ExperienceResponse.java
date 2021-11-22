package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.ExperienceImpl;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ExperienceResponse {
    private List<ExperienceImpl> experienceList;
}
