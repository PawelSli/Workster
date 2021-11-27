package com.github.pawelsli.workster.payload.request;

import com.github.pawelsli.workster.domain.JobOfferImpl;
import lombok.Data;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class CreateJobOfferRequest {
    @NotEmpty
    @Size (min = 1, max = 255, message = "Job offer title must be between 1 to 255 characters")
    private String title;

    @NotEmpty
    @Size (min = 1, max = 255, message = "Job offer location must be between 1 to 255 characters")
    private String location;

    @NotEmpty (message = "You must add job offer company")
    private String companyName;

    @Max (value = 1000000000, message = "Lower gap can't be bigger than 1000000000")
    @Min (value = 100, message = "Lower gap can't be less than 100")
    private Integer lowerGap;

    @Max (value = 1000000000, message = "Higher pay gap can't be bigger than 1000000000")
    @Min (value = 100, message = "Higher pay gap can't be less than 100")
    private Integer higherGap;

    private Boolean remote;

    @NotEmpty
    @Size (max = 100000, message = "Company description should be smaller than 10 000 characters")
    private String description;

    public JobOfferImpl convertToJobOfferImpl() {
        return JobOfferImpl.builder()
                           .title(title)
                           .location(location)
                           .salary_low(lowerGap)
                           .salary_high(higherGap)
                           .remote(remote)
                           .description(description)
                           .build();
    }
}
