package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.JobOfferImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.JobOffer;
import com.github.pawelsli.workster.entities.User;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class JobOfferListResponse {
    private List<JobOfferListElementResponse> jobOffers;

    public JobOfferListResponse(List<JobOffer> jobOffers, User user) {
        this.jobOffers = jobOffers.stream().map(jobOffer -> {
            return validateJobOfferListElement(jobOffer, user);
        }).collect(Collectors.toList());
    }

    private static JobOfferListElementResponse validateJobOfferListElement(JobOffer jobOffer, User user) {
        JobOfferListElementResponse jobOfferListElementResponse = new JobOfferListElementResponse(jobOffer);
        if (user == null) {
            return jobOfferListElementResponse;
        }
        if (jobOffer.getUser().getTitle().equalsIgnoreCase(user.getTitle())) {
            jobOfferListElementResponse.setOwner(true);
        }
        if (user.getFavouriteJobOffers().contains(jobOffer)) {
            jobOfferListElementResponse.setFavourite(true);
        }
        if (user.getAppliedJobOffers().contains(jobOffer)) {
            jobOfferListElementResponse.setApplied(true);
        }
        return jobOfferListElementResponse;
    }


}
