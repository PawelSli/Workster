package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.entities.File;
import com.github.pawelsli.workster.entities.JobOffer;
import com.github.pawelsli.workster.entities.JobRequest;
import com.github.pawelsli.workster.entities.User;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class JobRequestsListResponse {
    private JobOfferListElementResponse jobOfferListElementResponse;
    private List<UserApplicationResponse> userApplicationResponses;

    public JobRequestsListResponse(User user, JobOffer jobOffer, List<JobRequest> jobRequestList) {
        this.jobOfferListElementResponse = new JobOfferListElementResponse(jobOffer);
        if(jobOffer.getUser().equals(user)){
            this.jobOfferListElementResponse.setOwner(true);
        }
        this.userApplicationResponses = jobRequestList.stream().map(jobRequest -> new UserApplicationResponse(jobRequest.getUser(),
                jobRequest.getDescription(),
                jobRequest.getFiles().stream().map(File::getName).collect(Collectors.toList()))).collect(Collectors.toList());
    }
}
