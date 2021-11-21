package com.github.pawelsli.workster.payload.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class DeleteUserRequest {
    @NotBlank
    private String companyName;
    @NotBlank
    private String recruiterToDelete;
}
