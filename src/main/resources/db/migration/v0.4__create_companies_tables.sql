create table companies
(
    id          bigint auto_increment primary key,
    id_user     bigint        not null,
    description varchar(5000) not null,
    image       varchar(255)  not null
);

create table recruiters
(
    id bigint auto_increment primary key,
    id_user    bigint not null,
    id_company bigint not null,
    constraint recruiters_user_id_fk
        foreign key (id_user) references users (id)
            on delete cascade,
    constraint recruiters_company_id_fk
        foreign key (id_company) references companies (id)
            on delete cascade,
    status varchar(255) not null
);

create table candidates
(
    id_user    bigint not null,
    id_company bigint not null,
    primary key (id_user, id_company),
    constraint candidates_user_id_fk
        foreign key (id_user) references users (id)
            on delete cascade,
    constraint candidates_company_id_fk
        foreign key (id_company) references companies (id)
            on delete cascade
);