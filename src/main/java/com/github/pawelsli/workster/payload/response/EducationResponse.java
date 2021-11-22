package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.EducationImpl;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class EducationResponse {
    private List<EducationImpl> educationList;
}
