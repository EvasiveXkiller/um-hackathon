create table main.users
(
    id            text not null,
    email         text not null,
    password      text not null,
    userAuthToken text not null,
    coins         integer default 100,
    age           integer,
    height        text,
    weight        text,
    diseases      text
);

