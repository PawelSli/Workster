package com.github.pawelsli.workster.entities;

import com.github.pawelsli.workster.enums.UserRole;
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
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "name", nullable = false)
    private UserRole name;

    @ManyToMany(mappedBy = "roles")
    private Set<User> userSet = new HashSet<>();

}
