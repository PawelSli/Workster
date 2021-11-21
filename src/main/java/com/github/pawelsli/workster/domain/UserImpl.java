package com.github.pawelsli.workster.domain;

import com.github.pawelsli.workster.entities.JobOffer;
import com.github.pawelsli.workster.entities.Recruiter;
import com.github.pawelsli.workster.entities.User;
import com.github.pawelsli.workster.mapper.FileMapper;
import com.github.pawelsli.workster.mapper.UserMapper;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder(access = AccessLevel.PUBLIC)
public class UserImpl implements UserDetails {

    private static final long serialVersionUID = 1L;

    private Long userId;
    private String username;
    private String password;
    private LocalDateTime createdAt;
    private LocalDate birth;
    private String title;
    private String address;
    private String email;
    private String phone;
    private String website;
    private String github;
    private String twitter;
    private String instagram;
    private String facebook;
    private String description;
    private String image;
    private Collection<? extends GrantedAuthority> authorities;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public static UserImpl build(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        return UserImpl.builder()
                .userId(user.getId())
                .username(user.getName())
                .email(user.getEmail())
                .password(user.getPassword())
                .authorities(authorities)
                .createdAt(user.getCreatedAt())
                .birth(user.getBirth())
                .title(user.getTitle())
                .address(user.getAddress())
                .phone(user.getPhone())
                .website(user.getWebsite())
                .github(user.getGithub())
                .twitter(user.getTwitter())
                .instagram(user.getInstagram())
                .facebook(user.getFacebook())
                .description(user.getDescription())
                .image(user.getImage())
                .build();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
