package com.github.pawelsli.workster.payload.response;

import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UserApplicationResponse {
    private Long userId;
    private String username;
    private String title;
    private LocalDateTime createdAt;
    private String image;
    private String description;
    private List<String> files;

    public UserApplicationResponse(User user, String message, List<String> files) {
        this.userId = user.getId();
        this.username = user.getName();
        this.title = user.getTitle();
        this.createdAt = user.getCreatedAt();
        this.image = user.getImage();
        this.description = message;
        this.files = files;
    }
}
