package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.RecruiterImpl;
import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.enums.RecruiterRole;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Map;

@Getter
@Setter
public class RecruiterDataResponse {
    private String username;
    private LocalDateTime createdAt;
    private String title;
    private String email;
    private String image;
    private RecruiterRole recruiterRole;

    public RecruiterDataResponse(Map.Entry<UserImpl,RecruiterImpl> entry) {
        UserImpl user = entry.getKey();
        this.username = user.getUsername();
        this.createdAt = user.getCreatedAt();
        this.title = user.getTitle();
        this.email = user.getEmail();
        this.image = user.getImage();
        this.recruiterRole = entry.getValue().getStatus();
    }
}
