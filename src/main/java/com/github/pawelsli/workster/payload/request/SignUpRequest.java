package com.github.pawelsli.workster.payload.request;

import com.github.pawelsli.workster.domain.UserImpl;
import lombok.Data;

import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.Set;

@Data
public class SignUpRequest {

    @NotBlank(message = "Username value must be present")
    @Size(min = 1,max = 20,message = "Username length should be between 1 and 20")
    private String username;

    @NotBlank(message = "Email value must be present")
    @Size(min = 1,max = 50,message = "Email length should be between 1 and 50")
    @Email(message = "The value provided for email does not meet its objectives.")
    private String email;

    @NotBlank(message = "Password value must be present")
    private String password;

    @NotNull(message = "Birth date must be present")
    @Past(message = "Birth date must be in the past")
    private LocalDate birth;

    private Set<String> role;

    public UserImpl convertToUserImpl() {
        return UserImpl.builder()
                .username(username)
                .email(email)
                .password(password)
                .birth(birth)
                .build();
    }
}
