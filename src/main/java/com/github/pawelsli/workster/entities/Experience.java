package com.github.pawelsli.workster.entities;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "experiences")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user", nullable = false)
    private User user;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "company", nullable = false)
    private String company;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "still_work")
    private Boolean stillWork;
}
