package com.github.pawelsli.workster.payload.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class BecomeRecruiterRequest {
    @NotBlank
    private String userName;

    @NotBlank
    private String companyName;
}
