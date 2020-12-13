drop table Users;
drop table Travelers;
drop table Local_Residents;
drop table Recommended_Places;
drop table Events_List;
drop table Events;
drop table buddyOf;
drop table connect;
drop table recommend;
drop table contain;

create table Users (
    username char(32) primary key,
    password char(32) not null,
    name char(32) not null,
    surname char(32) not null,
    profile_picture char(32) not null default('avatar.jpg'),
    status char(1) not null,
    bio char(200) not null default('Hello! This is my bio!'),
    home_city char(32) not null,
    home_state_or_prov char(32) default('n/a'),
    home_country char(32) not null,
    age INTEGER
);

create table Travelers (
    username char(32) unique,
    traveler_id INTEGER primary key,
    vacation_city char(32) not null,
    vacation_state_or_prov char(32) default('n/a'),
    vacation_country char(32) not null,
    start_time datetime not null,
    end_time datetime not null
);

create table Local_Residents (
    username char(32) unique,
    resident_id INTEGER primary key
);

create table Recommended_Places (
    name char(32) primary key,
    city char(32) not null,
    state_or_prov char(32) default('n/a'),
    country char(32) not null,
    description char(230) not null
);

create table Events_List (
    username char(32) unique,
    events_list_id INTEGER primary key
);

create table Events (
    event_id INTEGER primary key,
    event_time datetime,
    location char(32) not null
);

create table buddyOf (
    uT_traveler_id INTEGER,
    uB_traveler_id INTEGER
);

create table connect (
    traveler_id INTEGER,
    resident_id INTEGER
);

create table recommend (
    resident_id INTEGER,
    name char(32) not null
);

create table contain (
    event_id INTEGER primary key,
    events_list_id_1 INTEGER,
    events_list_id_2 INTEGER
);