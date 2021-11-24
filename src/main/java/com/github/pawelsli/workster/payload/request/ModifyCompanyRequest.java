package com.github.pawelsli.workster.payload.request;

import com.github.pawelsli.workster.domain.CompanyImpl;
import com.github.pawelsli.workster.entities.Company;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class ModifyCompanyRequest {
    @NotEmpty
    @Size (min = 1, max = 50, message = "Company name should be between 1 to 50 characters")
    private String title;

    @NotEmpty
    @Size(max = 100000, message = "Company description should be smaller than 10 000 characters")
    private String description;

    @NotEmpty
    private String previousCompanyName;

    public Company modifyCompany(Company company,String logo){
        company.setName(title);
        company.setDescription(description);
        company.setImage(logo);
        return company;
    }
}
