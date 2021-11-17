package com.github.pawelsli.workster.mapper;

import com.github.pawelsli.workster.domain.EducationImpl;
import com.github.pawelsli.workster.entities.Education;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface EducationMapper {

    @Mapping(target = "id",source = "educationId")
    Education educationImplToEducation(EducationImpl educationImpl);

    @Mapping(target = "educationId",source = "id")
    EducationImpl educationToEducationImpl(Education education);
}
