package com.github.pawelsli.workster.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "candidates",
            joinColumns = {@JoinColumn(name = "id_company")},
            inverseJoinColumns = {@JoinColumn(name = "id_user")}
    )
    Set<User> candidates = new HashSet<>();

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<Recruiter> recruiters;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;
}
