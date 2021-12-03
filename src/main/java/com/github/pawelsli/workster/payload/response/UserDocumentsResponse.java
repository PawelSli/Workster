package com.github.pawelsli.workster.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
@Setter
public class UserDocumentsResponse {
    private List<UserSingleDocumentResponse> files;

    public UserDocumentsResponse(Map<String, Long> stringLongMap) {
        List<UserSingleDocumentResponse> list = new ArrayList<UserSingleDocumentResponse>();
        this.files = stringLongMap.entrySet().stream().map(stringLongEntry -> {
            return new UserSingleDocumentResponse(stringLongEntry.getKey(), stringLongEntry.getValue());
        }).collect(Collectors.toList());
    }
}
