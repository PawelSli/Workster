package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.CompanyImpl;
import com.github.pawelsli.workster.domain.JobOfferImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.JobOffer;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class JobOfferListElementResponse {
    private String companyName;
    private String title;
    private String location;
    private Integer salary_low;
    private Integer salary_high;
    private Boolean remote;
    private LocalDateTime createdAt;
    private Boolean owner;
    private Boolean favourite;
    private Boolean applied;


    public JobOfferListElementResponse(JobOfferImpl jobOffer) {
        this.companyName = jobOffer.getCompany().getName();
        this.title = jobOffer.getTitle();
        this.location = jobOffer.getLocation();
        this.salary_low = jobOffer.getSalary_low();
        this.salary_high = jobOffer.getSalary_high();
        this.remote = jobOffer.getRemote();
        this.createdAt = jobOffer.getCreatedAt();
    }

    public JobOfferListElementResponse(JobOffer jobOffer){
        this.companyName = jobOffer.getCompany().getImage();
        this.title = jobOffer.getTitle();
        this.location = jobOffer.getLocation();
        this.salary_low = jobOffer.getSalary_low();
        this.salary_high = jobOffer.getSalary_high();
        this.remote = jobOffer.getRemote();
        this.createdAt = jobOffer.getCreatedAt();
    }

}
