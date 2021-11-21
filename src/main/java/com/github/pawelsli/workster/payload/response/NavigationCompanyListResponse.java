package com.github.pawelsli.workster.payload.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class NavigationCompanyListResponse {
    private List<String> companyNames;

    public NavigationCompanyListResponse(List<String> companyNames){
        this.companyNames = companyNames;
    }
}
