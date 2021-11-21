package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.JobOfferImpl;
import com.github.pawelsli.workster.domain.RecruiterImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.enums.RecruiterRole;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
@Setter
public class CompanyDataResponse {
    private RecruiterRole recruiterRole;
    private List<UserImpl> candidates;
    private List<RecruiterDataResponse> recruiters;
    private List<JobOfferListElementResponse> jobOffers;
    private String name;
    private String description;
    private String image;

    public CompanyDataResponse(RecruiterRole recruiterRole,
                               List<JobOfferListElementResponse> jobOffers,
                               String name,
                               String description,
                               String image) {

        this.recruiterRole = recruiterRole;
        this.jobOffers = jobOffers;
        this.name = name;
        this.description = description;
        this.image = image;
    }

    public CompanyDataResponse(RecruiterRole recruiterRole,
                               Map<UserImpl, RecruiterImpl> recruiters,
                               List<JobOfferListElementResponse> jobOffers,
                               String name,
                               String description,
                               String image) {

        this.recruiterRole = recruiterRole;
        this.recruiters = recruiters.entrySet().stream().map(RecruiterDataResponse::new).collect(Collectors.toList());
        this.jobOffers = jobOffers;
        this.name = name;
        this.description = description;
        this.image = image;
    }

    public CompanyDataResponse(RecruiterRole recruiterRole,
                               List<UserImpl> candidates,
                               Map<UserImpl, RecruiterImpl> recruiters,
                               List<JobOfferListElementResponse> jobOffers,
                               String name,
                               String description,
                               String image) {

        this.recruiterRole = recruiterRole;
        this.candidates = candidates;
        this.recruiters = recruiters.entrySet().stream().map(RecruiterDataResponse::new).collect(Collectors.toList());
        this.jobOffers = jobOffers;
        this.name = name;
        this.description = description;
        this.image = image;
    }


}
