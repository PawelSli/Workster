package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.User;
import lombok.*;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;

@Getter
@Setter
public class ProfileInformationResponse {

    private String username;
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

    public ProfileInformationResponse(UserImpl userImpl) {
        this.username = userImpl.getUsername();
        this.birth = userImpl.getBirth();
        this.title = userImpl.getTitle();
        this.address = userImpl.getAddress();
        this.email = userImpl.getEmail();
        this.phone = userImpl.getPhone();
        this.website = userImpl.getWebsite();
        this.github = userImpl.getGithub();
        this.twitter = userImpl.getTwitter();
        this.instagram = userImpl.getInstagram();
        this.facebook = userImpl.getFacebook();
        this.description = userImpl.getDescription();
        this.image = userImpl.getImage();
    }

}
