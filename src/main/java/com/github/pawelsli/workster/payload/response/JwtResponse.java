package com.github.pawelsli.workster.payload.response;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@RequiredArgsConstructor
public class JwtResponse {

    private final String type = "Bearer";
    private final String token;
    private final Long id;
    private final String username;
    private final String email;
    private final List<String> roles;
}
