package com.github.pawelsli.workster.payload.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.List;

@Data
public class CreateJobRequest {

    @NotEmpty
    @Size (min = 50, max = 1000, message = "Job request message should be between 50 to 1000 characters")
    private String message;

    private List<String> files;

}
