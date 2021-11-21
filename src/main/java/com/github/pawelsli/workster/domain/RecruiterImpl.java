package com.github.pawelsli.workster.domain;

import com.github.pawelsli.workster.enums.RecruiterRole;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder(access = AccessLevel.PUBLIC)
public class RecruiterImpl {

    private Long recruiterId;
    private UserImpl user;
    private CompanyImpl company;
    private RecruiterRole status;
}
