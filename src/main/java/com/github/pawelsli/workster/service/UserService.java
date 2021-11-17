package com.github.pawelsli.workster.service;

import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.mapper.UserMapper;
import com.github.pawelsli.workster.payload.request.ProfileInformationRequest;
import com.github.pawelsli.workster.payload.response.ProfileInformationResponse;
import com.github.pawelsli.workster.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Autowired
    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByName(username).orElseThrow(() -> new UsernameNotFoundException("User with username:" + username + " not found."));
        return UserImpl.build(user);
    }

    @Transactional
    public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User with email:" + email + " not found."));
        return UserImpl.build(user);
    }

    public ProfileInformationResponse getProfileInformation(String name) {
        UserImpl user = (UserImpl) loadUserByUsername(name);
        return new ProfileInformationResponse(user);
    }

    public ProfileInformationResponse getProfileInformationForEditPage(){
        String name = ((UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return getProfileInformation(name);
    }

    public void modifyUser(ProfileInformationRequest profileInformationRequest) {
        String userName = ((UserImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        UserImpl userImpl = (UserImpl) loadUserByUsername(userName);
        User user = userMapper.userImplToUser(profileInformationRequest.modifyUserImpl(userImpl));
        userRepository.save(user);
    }

}
