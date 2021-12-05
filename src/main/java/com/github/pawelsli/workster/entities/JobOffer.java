package com.github.pawelsli.workster.entities;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table (name = "job_offers")
public class JobOffer {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne (fetch = FetchType.LAZY, optional = false)
    @JoinColumn (name = "id_user", nullable = false)
    private User user;

    @ManyToOne (fetch = FetchType.LAZY, optional = false)
    @JoinColumn (name = "id_company", nullable = false)
    private Company company;

    @Column (name = "title", nullable = false)
    private String title;

    @ManyToMany (mappedBy = "favouriteJobOffers")
    private Set<User> fans = new HashSet<>();

    @ManyToMany (mappedBy = "appliedJobOffers")
    private Set<User> candidates = new HashSet<>();

    @OneToMany(mappedBy = "jobOffer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<JobRequest> jobRequests = new HashSet<>();

    @Column (name = "location", nullable = false)
    private String location;

    @Column (name = "salary_low", nullable = false)
    private Integer salary_low;

    @Column (name = "salary_high", nullable = false)
    private Integer salary_high;

    @Column (name = "remote", nullable = false)
    private Boolean remote;

    @Column (name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Lob
    @Column (name = "description", nullable = false)
    private String description;
}
