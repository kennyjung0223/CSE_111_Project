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


---------------------------- 20 QUERIES -------------------------


---------------------------- POST -------------------------

-- insert user into Users table
    -- insert into Users values (?);
    insert into Users values ('exampleT', '*********', 'Database', 'Systems', 'image.jpg', 'T', 'example of traveler', 'Merced', 'CA', 'United States', 2020);
    insert into Users values ('exampleR', '*********', 'Project', 'Phase 2', 'image.jpg', 'R', 'example of resident', 'Merced', 'CA', 'United States', 2020);

-- insert into Traveler or Local_Residents table
    -- insert into Traveler values (?);
    -- insert into Local_Residents values (?);

    -- if status = 'T'
    insert into Travelers values ('exampleT', 105, 'Seoul', 'Gangnam', 'South Korea', '2020-08-29', '2020-12-15');
    
    -- if status = 'R'
    insert into Local_Residents values ('exampleR', 203);

-- insert into buddyOf when travelers connect with other travelers
    -- (both ways) insert into buddyOf values (?);
    insert into buddyOf values ('exampleT', 104, 'gamjaman', 101);
    insert into buddyOf values ('gamjaman', 101, 'exampleT', 104);

-- insert into recommend and Recommended_Places when local residents recommend
    -- insert into recommend values (?);
    -- insert into Recommended_Places values (?);
    insert into recommend values (203, 'University of California, Merced');
    insert into Recommended_Places values ('University of California, Merced', 'Merced', 'CA', 'United States', 'UC at Merced');

-- insert into connect and Connections when a traveler connects with a local resident
    -- (both ways) insert into connect values (?);
    -- (both ways) insert into Connections values (?); 
    insert into connect values (104, 203);
    insert into connect values (203, 104);

    insert into Connections values ('exampleT', 'exampleR');
    insert into Connections values ('exampleR', 'exampleT');

-- insert into Events_List and Events when a traveler makes an event
    -- insert into Events_List values (?);
    -- (both ways) insert into Events values (?);
    insert into Events_List values (304, 'exampleT');

    insert into Events values (403, 304, 'disguised_toast', '2020-12-01', 'The Grove');
    insert into Events values (403, 303, 'exampleT', '2020-12-01', 'The Grove');

---------------------------- PUT -------------------------

-- update profile_picture
    -- update Users set profile_picture = ? where username = '?'
    update Users set profile_picture = 'new_image.jpg' where username = 'gamjaman';

-- update password for specific user
    -- update Users set password = ? where username = ?
    update users set password = '*****' where username = 'test';

-- update user locations
    -- update Users set home_city/home_st_o_p/home_country where username = '?'
    update Users set home_city = 'Sacramento' where username = 'exampleT';

-- update user bio
    -- update Users set bio = '?' where username = '?'
    update Users set bio = 'i love potatoes' where username = 'gamjaman';

-- update event time for specific event_id
    -- update Events set event_time = '?' where event_id = '?'
    update Events set event_time = '2021-02-25' where event_id = 402;

---------------------------- DELETE -------------------------

-- delete event
    -- delete from Events where event_id = ?
    delete from Events where event_id = 403;

-- delete buddy
    -- delete from buddyOf where uT_username = ?
    -- delete from buddyOf where uB_username = ?
    delete from buddyOf where uT_username = 'andyman' AND uB_username = 'test';
    delete from buddyOf where uT_username = 'test' AND uT_username = 'andyman';

-- delete connection
    -- delete from connect where traveler_id = ?1/?2 AND resident_id = ?2/?1
    -- delete from Connections where username = ?1/?2 AND connection_user = ?2/?1

---------------------------- GET -------------------------

-- select buddies of travelers 
select uB_username
from buddyOf
where uT_username = 'gamjaman';

-- get recommended places depending on user vacation location city
select name, city
from Recommended_Places, Travelers
where username = 'gamjaman' AND
    vacation_city = city AND
    vacation_st_o_p = state_or_province AND
    vacation_country = country;

-- get all the other travelers who are traveling in the same vacation location of a specific user
select username
from Travelers
where username <> 'gamjaman' AND
    vacation_city = (select vacation_city
                     from Travelers
                     where username = 'gamjaman') AND
    vacation_st_o_p = (select vacation_st_o_p
                       from Travelers
                       where username = 'gamjaman') AND
    vacation_country = (select vacation_country
                        from Travelers
                        where username = 'gamjaman');

-- get all the local residents in vacation location of a specific traveler
select U.username
from Travelers T, Users U
where T.username = 'gamjaman' AND
    T.vacation_city = U.home_city AND
    T.vacation_st_o_p = U.home_st_o_p AND
    T.vacation_country = U.home_country AND
    U.status = 'R';

-- list all the recommended places recommended by certain local_resident
select recommend.name
from Local_Residents, recommend
where Local_Residents.username = 'disguised_toast' AND
    Local_Residents.resident_id = recommend.resident_id;

-- all events for specific user
select attendee_user, event_time, location
from Events_List EL, Events E
where username = 'gamjaman' AND
    EL.events_list_id = E.events_list_id
order by event_time;

-- view user connections
select connection_user
from Connections C1
where username = 'gamjaman' AND
    username in (select connection_user
                from Connections C2
                where username = C1.connection_user);
