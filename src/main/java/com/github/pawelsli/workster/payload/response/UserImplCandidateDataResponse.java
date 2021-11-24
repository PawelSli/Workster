package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.UserImpl;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserImplCandidateDataResponse {
    private Long userId;
    private String username;
    private String title;
    private LocalDateTime createdAt;
    private String image;

    public UserImplCandidateDataResponse(UserImpl user) {
        this.userId = user.getUserId();
        this.username = user.getUsername();
        this.title = user.getTitle();
        this.createdAt = user.getCreatedAt();
        this.image = user.getImage();
    }
}
