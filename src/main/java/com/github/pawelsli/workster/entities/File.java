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
@Table (name = "files")
public class File {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany (mappedBy = "files")
    private Set<JobRequest> jobRequests = new HashSet<>();

    @ManyToOne (fetch = FetchType.LAZY, optional = false)
    @JoinColumn (name = "id_user", nullable = false)
    private User user;

    @Column (name = "name", nullable = false)
    private String name;

}
