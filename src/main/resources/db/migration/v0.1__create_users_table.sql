create table users
(
    id          bigint auto_increment primary key,
    name        varchar(255)  not null,
    password    varchar(255)  not null,
    created_at  timestamp     not null,
    title       varchar(50)   null,
    address     varchar(255)  null,
    email       varchar(255)  null,
    phone       varchar(255)  null,
    website     varchar(255)  null,
    github      varchar(255)  null,
    twitter     varchar(255)  null,
    instagram   varchar(255)  null,
    facebook    varchar(255)  null,
    description varchar(5000) null,
    image       varchar(255)  null
);