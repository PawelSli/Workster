package com.github.pawelsli.workster.mapper;

import com.github.pawelsli.workster.domain.JobOfferImpl;
import com.github.pawelsli.workster.entities.JobOffer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface JobOfferMapper {

    @Mapping(target = "jobOfferId", source = "id")
    JobOfferImpl jobOfferToJobOfferImpl(JobOffer jobOffer);

    @Mapping(target = "id", source = "jobOfferId")
    JobOffer jobOfferImplToJobOffer(JobOfferImpl jobOfferImpl);
}
