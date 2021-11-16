create table educations
(
    id         bigint auto_increment primary key,
    id_user    bigint       not null,
    constraint educations_user_id_fk
        foreign key (id_user) references users (id)
            on delete cascade,
    title      varchar(255) not null,
    school     varchar(255) not null,
    start_date date         not null,
    end_date   date         not null

);

create table experiences
(
    id         bigint auto_increment primary key,
    id_user    bigint       not null,
    constraint experiences_user_id_fk
        foreign key (id_user) references users (id)
            on delete cascade,
    title      varchar(255) not null,
    company    varchar(255) not null,
    location   varchar(255) not null,
    start_date date         not null,
    end_date   date         null,
    still_work boolean      null
);