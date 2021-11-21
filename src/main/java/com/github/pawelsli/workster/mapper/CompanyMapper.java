package com.github.pawelsli.workster.mapper;

import com.github.pawelsli.workster.domain.CompanyImpl;
import com.github.pawelsli.workster.entities.Company;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CompanyMapper {

    @Mapping(target = "companyId", source = "id")
    CompanyImpl companyToCompanyImpl(Company company);

    @Mapping(target = "id", source = "companyId")
    Company companyImplToCompany(CompanyImpl companyImpl);
}
