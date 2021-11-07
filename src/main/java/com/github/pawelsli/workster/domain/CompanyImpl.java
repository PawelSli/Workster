package com.github.pawelsli.workster.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class CompanyImpl {

    private Long companyId;

    @Size(min = 10, max = 5000)
    @NotEmpty(message = "Can not be empty")
    private String description;

    @Size(min = 1, max = 5000)
    @NotEmpty(message = "Can not be empty")
    private String image;
}
