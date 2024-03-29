package com.github.pawelsli.workster.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class NavigationCompanyListResponse {
    private List<String> companyNames;
}
