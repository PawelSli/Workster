package com.github.pawelsli.workster.domain;

import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder (access = AccessLevel.PUBLIC)
public class JobOfferImpl {
    private Long jobOfferId;
    private UserImpl user;
    private CompanyImpl company;
    private String title;
    private String location;
    private Integer salary_low;
    private Integer salary_high;
    private Boolean remote;
    private LocalDateTime createdAt;
    private String description;
}
