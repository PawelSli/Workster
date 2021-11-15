package com.github.pawelsli.workster.payload.request;

import com.github.pawelsli.workster.domain.UserImpl;
import lombok.Data;

import javax.validation.constraints.*;
import java.time.LocalDate;

@Data
public class ProfileInformationRequest {

    @NotBlank(message = "Username value must be present")
    @Size(min = 1, max = 20, message = "Username length should be between 1 and 20")
    private String name;

    @NotBlank(message = "Username value must be present")
    @Size(min = 1, max = 30, message = "Username length should be between 1 and 30")
    private String title;

    @NotBlank(message = "Username value must be present")
    @Size(min = 1, max = 100, message = "Username length should be between 1 and 100")
    private String address;

    @NotBlank(message = "Email value must be present")
    @Size(min = 1, max = 50, message = "Email length should be between 1 and 50")
    @Email(message = "The value provided for email does not meet its objectives.")
    private String email;

    @Size(min = 9, max = 9, message = "Telephone should have only 9 numbers")
    private String phone;

    @NotBlank(message = "Website value must be present")
    @Size(min = 1, max = 30, message = "Website length should be between 1 and 30")
    private String website;

    @NotBlank(message = "Website value must be present")
    @Size(min = 1, max = 30, message = "Website length should be between 1 and 30")
    private String github;

    @NotBlank(message = "Twitter value must be present")
    @Size(min = 1, max = 30, message = "Twitter length should be between 1 and 30")
    private String twitter;

    @NotBlank(message = "Instagram value must be present")
    @Size(min = 1, max = 30, message = "Instagram length should be between 1 and 30")
    private String instagram;

    @NotBlank(message = "Facebook value must be present")
    @Size(min = 1, max = 30, message = "Facebook length should be between 1 and 30")
    private String facebook;

    @Size(min = 0, max = 10000, message = "Website length should be between 0 and 10000")
    private String description;

    private String image;

    public UserImpl modifyUserImpl(UserImpl userImpl) {
        userImpl.setUsername(name);
        userImpl.setAddress(address);
        userImpl.setTitle(title);
        userImpl.setEmail(email);
        userImpl.setPhone(phone);
        userImpl.setWebsite(website);
        userImpl.setGithub(github);
        userImpl.setFacebook(facebook);
        userImpl.setInstagram(instagram);
        userImpl.setTwitter(twitter);
        userImpl.setDescription(description);
        userImpl.setImage(image);
        return userImpl;
    }
}
