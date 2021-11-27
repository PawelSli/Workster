create table job_offers
(
    id          bigint auto_increment primary key,
    id_company  bigint        not null,
    constraint job_offers_company_id_fk
        foreign key (id_company) references companies (id),
    id_user     bigint        not null,
    constraint job_offers_user_id_fk
        foreign key (id_user) references users (id),
    title       varchar(255)  not null,
    location    varchar(255)  not null,
    salary_low  bigint  not null,
    salary_high bigint not null,
    remote      bool          not null,
    created_at  timestamp     not null,
    description longtext COLLATE utf8mb4_unicode_ci not null
);

create table favourite_job_offers
(
    id_user      bigint not null,
    id_job_offer bigint not null,
    primary key (id_user, id_job_offer),
    constraint favourite_job_offers_job_offer_id_fk
        foreign key (id_user) references users (id),
    constraint favourite_job_offers_job_offer_id_fk
        foreign key (id_job_offer) references job_offers (id)
);

create table applied_job_offers
(
    id_user      bigint not null,
    id_job_offer bigint not null,
    primary key (id_user, id_job_offer),
    constraint applied_job_offers_user_id_fk
        foreign key (id_user) references users (id),
    constraint applied_job_offers_job_offer_id_fk
        foreign key (id_job_offer) references job_offers (id)
)