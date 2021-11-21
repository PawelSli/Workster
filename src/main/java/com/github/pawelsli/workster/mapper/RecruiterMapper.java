package com.github.pawelsli.workster.mapper;

import com.github.pawelsli.workster.domain.RecruiterImpl;
import com.github.pawelsli.workster.entities.Recruiter;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Set;

@Mapper(componentModel = "spring")
public interface RecruiterMapper {

    @Mapping(target = "id", source = "recruiterId")
    Recruiter recruiterImplToRecruiter(RecruiterImpl recruiterImpl);

    @Mapping(target = "recruiterId", source = "id")
    RecruiterImpl recruiterToRecruiterImpl(Recruiter recruiter);

    Set<RecruiterImpl> recruiterSetToRecruiterImplSet(Set<Recruiter> recruiters);

    Set<Recruiter> recruiterImplSetToRecruiterSet(Set<RecruiterImpl> recruiters);
}
