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
    username char(32) not null,
    password char(32) not null,
    name char(32) not null,
    surname char(32) not null,
    profile_picture image,
    bio char(200) not null,
    home_location char(32) not null,
    age INTEGER
);

create table Travelers (
    username char(32) not null,
    traveler_id INTEGER,
    vacation_location char(32) not null,
    start_time datetime not null,
    end_time datetime not null
);

create table Local_Residents (
    username char(32) not null,
    resident_id INTEGER
);

create table Connections (
    username char(32) not null,
    connection_user char(32) not null
);

create table Events_List (
    events_list_id INTEGER,
    username char(32) not null
);

create table Events (
    event_id INTEGER,
    events_list_id INTEGER
    attendee_user char(32) not null,
    event_time datetime,
    location char(32) not null
);

create table Recommended_Places (
    name char(32) not null,
    city char(32) not null,
    state_or_province char(32) not null,
    country char(32) not null,
    description char(150) not null
);

create table buddyOf (
    uT_username char(16) not null,
    uT_traveler_id INTEGER,
    uB_username char(16)not null,
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

create table see (
    traveler_id INTEGER,
    name char(32) not null
);

create table send (
    username char(16) not null,
    msg_code INTEGER
);
