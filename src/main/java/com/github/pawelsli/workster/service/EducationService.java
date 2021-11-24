package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.EducationImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.Education;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.mapper.EducationMapper;
import com.github.pawelsli.workster.mapper.UserMapper;
import com.github.pawelsli.workster.payload.response.EducationResponse;
import com.github.pawelsli.workster.repositories.EducationRepository;
import com.github.pawelsli.workster.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class EducationService {

    private final EducationRepository educationRepository;
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final EducationMapper educationMapper;

    @Autowired
    public EducationService(EducationRepository educationRepository,
                            UserRepository userRepository,
                            UserMapper userMapper,
                            EducationMapper educationMapper) {
        this.educationRepository = educationRepository;
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.educationMapper = educationMapper;
    }

    public EducationResponse getAllUserEducationsPublic(String username) {
        UserImpl user = userMapper.userToUserImpl(userRepository.findByName(username).orElseThrow());
        List<Education> educationList = educationRepository.findAllByUser(userMapper.userImplToUser(user));
        return new EducationResponse(educationList.stream().map(educationMapper::educationToEducationImpl).collect(Collectors.toList()));
    }

    public EducationResponse getAllUserEducations() {
        UserImpl user = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Education> educationList = educationRepository.findAllByUser(userMapper.userImplToUser(user));
        return new EducationResponse(educationList.stream().map(educationMapper::educationToEducationImpl).collect(Collectors.toList()));
    }

    @Transactional
    public void saveUserEducations(List<EducationImpl> educationList) {
        UserImpl user = (UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        educationList.stream().filter(EducationImpl::getStillEducate).forEach(education -> education.setEndDate(null));
        Set<Education> educationSet = educationList.stream().map(educationMapper::educationImplToEducation).collect(Collectors.toSet());
        User userToModifyData = userMapper.userImplToUser(user);
        educationSet.forEach(education -> education.setUser(userToModifyData));
        educationRepository.deleteAllByUser(userToModifyData);
        educationRepository.saveAll(educationSet);
    }

}
