package com.github.pawelsli.workster.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserSingleDocumentResponse {
    private String fileName;
    private Long fileSize;
}
