package com.github.pawelsli.workster.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "job_offers")
public class JobOffer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(mappedBy = "favouriteJobOffers")
    private Set<User> fans = new HashSet<>();

    @ManyToMany(mappedBy = "appliedJobOffers")
    private Set<User> candidates = new HashSet<>();

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "salary_low", nullable = false)
    private String salary_low;

    @Column(name = "salary_high", nullable = false)
    private String salary_high;

    @Column(name = "remote", nullable = false)
    private Boolean remote;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "description", nullable = false)
    private String description;
}