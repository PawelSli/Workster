package com.github.pawelsli.workster.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder(access = AccessLevel.PUBLIC)
public class CompanyImpl {

    private Long companyId;
    private String name;
    private String description;
    private String image;
}
