package com.github.pawelsli.workster.mapper;

import com.github.pawelsli.workster.domain.CompanyImpl;
import com.github.pawelsli.workster.entities.Company;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CompanyMapper {

    @Mapping(target="companyId", source="id")
    CompanyImpl companyToCompanyImpl(Company company);

    @Mapping(target="id", source="companyId")
    Company companyImplToCompany(CompanyImpl companyImpl);
}
