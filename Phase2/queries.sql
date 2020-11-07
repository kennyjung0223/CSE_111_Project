drop table Users;
drop table Travelers;
drop table Local_Residents;
drop table Messages;
drop table Calendars;
drop table Events;
drop table Recommended_Places;
drop table buddyOf;
drop table connect;
drop table recommend;
drop table views;
drop table send;

create table Users (
    username char(16) not null,
    password char(32) not null,
    profile_picture image,
    preferences char(150) not null,
    bio char(150) not null,
    home_location char(32) not null,
    age INTEGER
);

create table Travelers (
    username char(16) not null,
    traveler_id INTEGER,
    vacation_location char(32) not null,
    start_time datetime not null,
    end_time datetime not null
);

create table Local_Residents (
    username char(16) not null,
    resident_id INTEGER
);

create table Messages (
    msg_code INTEGER,
    content char(300) not null
);

create table Calendars (
    calendar_id INTEGER,
    username char(16) not null
);

create table Events (
    event_id INTEGER,
    calendar_id INTEGER
    buddy_names char(150) not null,
    event_time datetime,
    location char(32) not null
);

create table Recommended_Places (
    name char(32) not null,
    city char(32) not null,
    country char(32) not null
);

create table buddyOf (
    uT_username char(16) not null,
    uT_traveler_id INTEGER,
    uB_username char(16) not null,
    uB_traveler_id INTEGER
);

create table connect (
    travler_id INTEGER,
    resident_id INTEGER
);

create table recommend (
    resident_id INTEGER,
    name char(32) not null
);

create table views (
    traveler_id INTEGER,
    name char(32) not null
);

create table send (
    username char(16) not null,
    msg_code INTEGER
);

