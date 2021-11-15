create table job_requests
(
    id           bigint auto_increment primary key,
    id_job_offer bigint        not null,
    constraint job_requests_job_offer_id_fk
        foreign key (id_job_offer) references job_offers (id),
    id_user      bigint        not null,
    constraint job_requests_user_id_fk
        foreign key (id_user) references users (id),
    description  varchar(5000) not null
);

create table files
(
    id      bigint auto_increment primary key,
    id_user bigint       not null,
    constraint files_user_id_fk
        foreign key (id_user) references users (id),
    name    varchar(255) not null
);

create table job_requests_files(
    id_file bigint not null,
    id_job_request bigint not null,
    primary key (id_file,id_job_request),
    constraint job_requests_files_filed_id_fk
        foreign key (id_file) references files(id),
    constraint job_requests_files_request_id_fk
        foreign key (id_job_request) references job_requests(id)
);

