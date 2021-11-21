package com.github.pawelsli.workster.mapper;

import com.github.pawelsli.workster.domain.ExperienceImpl;
import com.github.pawelsli.workster.entities.Experience;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ExperienceMapper {

    @Mapping(target = "id", source = "experienceId")
    Experience experienceImplToExperience(ExperienceImpl experienceImpl);

    @Mapping(target = "experienceId", source = "id")
    ExperienceImpl experienceToExperienceImpl(Experience experience);

}
