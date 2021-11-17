package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.EducationImpl;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class EducationResponse {

    private List<EducationImpl> educationList;

    public EducationResponse(List<EducationImpl> educationList) {
        this.educationList = educationList;
    }
}
