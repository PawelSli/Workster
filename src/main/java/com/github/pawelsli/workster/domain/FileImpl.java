package com.github.pawelsli.workster.domain;

import com.github.pawelsli.workster.entities.User;
import lombok.Data;

@Data
public class FileImpl {
    private Long fileId;
    private UserImpl user;
    private String name;

    public FileImpl(UserImpl user, String name) {
        this.user = user;
        this.name = name;
    }
}
