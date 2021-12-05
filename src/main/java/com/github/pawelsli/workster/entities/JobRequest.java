package com.github.pawelsli.workster.entities;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "job_requests")
public class JobRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "job_requests_files",
            joinColumns = {@JoinColumn(name = "id_job_request")},
            inverseJoinColumns = {@JoinColumn(name = "id_file")}
    )
    Set<File> files = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_job_offer", nullable = false)
    private JobOffer jobOffer;

    @Lob
    @Column(name = "description", nullable = false)
    private String description;
}
