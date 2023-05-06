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

create table main.currentReadings
(
    id          text,
    sys_bp      text,
    dias_bp     text,
    blood_sugar text,
    temp        text,
    hr          text
);

create table main.tasks
(
    id              text,
    taskName        text,
    taskCompleted   text,
    imageProof      blob,
    currentlyActive text
);



