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
    userid            text,
    taskName          text,
    taskCompleted     text,
    imageData         blob,
    currentlyActive   text,
    taskid            text,
    likes             integer,
    imageFileName     text,
    imageMimeType     text,
    imageLastModified integer default (strftime('%s', 'now') * 1000),
    imageSize         integer
);

CREATE TABLE "users"
(
    id            text not null,
    email         text not null,
    password      text not null,
    userAuthToken text not null,
    coins         integer default 100,
    age           integer,
    height        text,
    weight        text,
    diseases      text,
    displayName   text
)

