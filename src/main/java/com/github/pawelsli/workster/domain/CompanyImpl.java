package com.github.pawelsli.workster.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class CompanyImpl {

    private Long companyId;
    private String description;
    private String image;
}
