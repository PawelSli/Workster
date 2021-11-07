create table roles
(
    id   bigint auto_increment primary key,
    name varchar(255) not null
);

create table users_roles
(
    id_user bigint not null,
    id_role bigint not null,
    primary key (id_user, id_role),
    constraint users_roles_user_id_fk
        foreign key (id_user) references users (id)
            on delete cascade,
    constraint users_roles_role_id_fk
        foreign key (id_user) references roles (id)
            on delete cascade
);
