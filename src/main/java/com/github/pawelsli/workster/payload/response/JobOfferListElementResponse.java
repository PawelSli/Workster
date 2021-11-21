package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.CompanyImpl;
import com.github.pawelsli.workster.domain.JobOfferImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class JobOfferListElementResponse {
    private String companyName;
    private String title;
    private String location;
    private String salary_low;
    private String salary_high;
    private Boolean remote;
    private LocalDateTime createdAt;

    public JobOfferListElementResponse(JobOfferImpl jobOffer) {
        this.companyName = jobOffer.getCompany().getName();
        this.title = jobOffer.getTitle();
        this.location = jobOffer.getLocation();
        this.salary_low = jobOffer.getSalary_low();
        this.salary_high = jobOffer.getSalary_high();
        this.remote = jobOffer.getRemote();
        this.createdAt = jobOffer.getCreatedAt();
    }
}
