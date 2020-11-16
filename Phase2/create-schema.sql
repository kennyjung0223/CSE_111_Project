---------------------------DROP TABLES-----------------------------

drop table Users;
drop table Travelers;
drop table Local_Residents;
drop table Connections;
drop table Events_List;
drop table Events;
drop table Recommended_Places;
drop table buddyOf;
drop table connect;
drop table recommend;

---------------------------CREATE TABLES---------------------------

create table Users (
    username char(32) not null,
    password char(32) not null,
    name char(32) not null,
    surname char(32) not null,
    profile_picture image,
    status char(1) not null,
    bio char(200) not null,
    home_city char(32) not null,
    home_st_o_p char(32) not null,
    home_country char(32) not null,
    age INTEGER
);

create table Travelers (
    username char(32) not null,
    traveler_id INTEGER,
    vacation_city char(32) not null,
    vacation_st_o_p char(32) not null,
    vacation_country char(32) not null,
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
    events_list_id INTEGER,
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
    traveler_id INTEGER,
    resident_id INTEGER
);

create table recommend (
    resident_id INTEGER,
    name char(32) not null
);

---------------------------- INSERT SAMPLE DATA -------------------------

insert into Users values ('gamjaman', '*********', 'Kenny', 'Jung', 'image.jpg', 'T', 'i like potatoes', 'Los Angeles', 'CA', 'United States', 20);
insert into Users values ('andyman', '*********', 'Andy', 'Bui', 'image.jpg', 'T', 'i play guitar', 'San Jose', 'CA', 'United States', 21);
insert into Users values ('kiryonth', '*********', 'Kiana', 'Ha', 'image.jpg', 'R', 'i like noodles', 'San Jose', 'CA', 'United States', 20);
insert into Users values ('disguised_toast', '*********', 'Disguised', 'Toast', 'image.jpg', 'R', 'i stream', 'Los Angeles', 'CA', 'United States', 29);
insert into Users values ('sykkuno', '*********', 'Syk', 'Kuno', 'image.jpg', 'T', 'i also stream', 'Los Angeles', 'CA', 'United States', 27);
insert into Users values ('test', '*********', 'To be', 'Deleted', 'image.jpg', 'T', 'to be deleted', 'San Jose', 'CA', 'United States', 20);

insert into Travelers values ('gamjaman', 101, 'San Jose', 'CA', 'United States', '2021-02-20', '2021-03-02');
insert into Travelers values ('andyman', 102, 'Tokyo', 'n/a', 'Japan', '2021-02-20', '2021-03-02');
insert into Travelers values ('sykkuno', 103, 'San Jose', 'CA', 'United States', '2021-02-20', '2021-03-06');
insert into Travelers values ('test', 104, 'Tokyo', 'n/a', 'Japan', '2020-11-30', '2020-12-30');

insert into Local_Residents values ('kiryonth', 201);
insert into Local_Residents values ('disguised_toast', 202);

insert into buddyOf values ('gamjaman', 101, 'sykkuno', 103);
insert into buddyOf values ('sykkuno', 103, 'gamjaman', 101);

insert into buddyOf values ('andyman', 102, 'test', 104);
insert into buddyOf values ('test', 104, 'andyman', 102);

insert into recommend values (201, 'Great Mall');
insert into Recommended_Places values ('Great Mall', 'San Jose', 'CA', 'United States', 'one of the malls');

insert into recommend values(202, 'The Grove');
insert into Recommended_Places values ('The Grove', 'Los Angeles', 'CA', 'United States', 'nice open mall');

insert into recommend values(202, 'Disneyland');
insert into Recommended_Places values ('Disneyland', 'Anaheim', 'CA', 'United States', 'happiest place on Earth');

insert into connect values (101, 202);
insert into connect values (202, 101);
insert into connect values (101, 201);
insert into connect values (201, 101);

insert into Connections values ('gamjaman', 'disguised_toast');
insert into Connections values ('disguised_toast', 'gamjaman');
insert into Connections values ('gamjaman', 'kiryonth');
insert into Connections values ('kiryonth', 'gamjaman');

insert into Events_List values (301, 'gamjaman');
insert into Events_List values (302, 'sykkuno');
insert into Events_List values (303, 'disguised_toast');

insert into Events values (401, 301, 'sykkuno', '2021-02-23', 'The Grove');
insert into Events values (401, 302, 'gamjaman', '2021-02-23', 'The Grove');
insert into Events values (402, 301, 'disguised_toast', '2021-02-26', 'Disneyland');
insert into Events values (402, 303, 'gamjaman', '2021-02-26', 'Disneyland');

---------------------------SEE TABLES--------------------------

select *
from Users;

select *
from Travelers;

select *
from Local_Residents;

select *
from Connections;

select *
from Events_List;

select *
from Events;

select *
from Recommended_Places;

select *
from buddyOf;

select *
from connect;

select *
from recommend;
