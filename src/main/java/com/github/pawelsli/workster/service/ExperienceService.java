package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.ExperienceImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.Experience;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.mapper.ExperienceMapper;
import com.github.pawelsli.workster.mapper.UserMapper;
import com.github.pawelsli.workster.payload.response.ExperienceResponse;
import com.github.pawelsli.workster.repositories.ExperienceRepository;
import com.github.pawelsli.workster.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ExperienceService {

    private final ExperienceRepository experienceRepository;
    private final UserMapper userMapper;
    private final ExperienceMapper experienceMapper;

    @Autowired
    public ExperienceService(ExperienceRepository experienceRepository, UserMapper userMapper, ExperienceMapper experienceMapper) {
        this.experienceRepository = experienceRepository;
        this.userMapper = userMapper;
        this.experienceMapper = experienceMapper;
    }

    public ExperienceResponse getAllUserExperiences() {
        UserImpl user = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Experience> experienceList = experienceRepository.findAllByUser(userMapper.userImplToUser(user));
        return new ExperienceResponse(experienceList.stream().map(experienceMapper::experienceToExperienceImpl).collect(Collectors.toList()));
    }

    @Transactional
    public void saveUserExperiences(List<ExperienceImpl> experienceList) {
        UserImpl user = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        experienceList.stream().filter(ExperienceImpl::getStillWork).forEach(experience -> experience.setEndDate(null));
        Set<Experience> experienceSet = experienceList.stream().map(experienceMapper::experienceImplToExperience).collect(Collectors.toSet());
        User userToModifyData = userMapper.userImplToUser(user);
        experienceSet.forEach(experience -> experience.setUser(userToModifyData));
        experienceRepository.deleteAllByUser(userToModifyData);
        experienceRepository.saveAll(experienceSet);
    }
}
