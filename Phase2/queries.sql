-- insert user into Users table
insert into Users values ('gamjaman', '*********', 'Kenny', 'Jung', 'image.jpg', 'T', 'i like potatoes', 'Los Angeles, CA', 20);
insert into Users values ('andyman', '*********', 'Andy', 'Bui', 'image.jpg', 'T', 'i play guitar', 'San Jose, CA', 21);
insert into Users values ('kiryonth', '*********', 'Kiana', 'Ha', 'image.jpg', 'R', 'i like noodles', 'San Jose, CA', 20);
insert into Users values ('disguised_toast', '*********', 'Disguised', 'Toast', 'image.jpg', 'R', 'i stream', 'Los Angeles, CA', 29);
insert into Users values ('sykkuno', '*********', 'Syk', 'Kuno', 'image.jpg', 'T', 'i also stream', 'Los Angeles, CA', 27);

-- insert user into traveler or local_resident (we need some kind of if statement)
-- for now, we can just put in manually (for testing purposes)
-- when we insert a new user who is also a traveler, put in null values for vl, st, and et
insert into Travelers values ('gamjaman', 1, 'San Jose, CA', '2021-02-20', '2021-03-02');
insert into Travelers values ('andyman', 2, 'Tokyo, Japan', '2021-02-20', '2021-03-02');
insert into Travelers values ('sykkuno', 3, 'San Jose, CA', '2021-02-20', '2021-03-06');

insert into Local_Residents values ('kiryonth', 1);
insert into Local_Residents values ('disguised_toast', 2);

-- update vl, st, and et

-- travelers connect with other travelers
insert into buddyOf values ('gamjaman', 1, 'andyman', 2);
insert into buddyOf values ('andyman', 2, 'gamjaman', 1);

insert into buddyOf values ('gamjaman', 1, 'sykkuno', 3);
insert into buddyOf values ('sykkuno', 3, 'gamjaman', 1);

-- delete from buddyOf where uT_username = 'gamjaman';
-- delete from buddyOf where uT_username = 'andyman';

-- select buddies of travelers 
select uB_username
from buddyOf
where uT_username = 'andyman'

-- recommend place
insert into recommend values (1, 'Great Mall');
insert into Recommended_Places values ('Great Mall', 'San Jose', 'CA', 'United States', 'one of the malls');

insert into recommend values(2, 'The Grove');
insert into Recommended_Places values ('The Grove', 'Los Angeles', 'CA', 'United States', 'nice open mall');

insert into recommend values(2, 'Disneyland');
insert into Recommended_Places values ('Disneyland', 'Anaheim', 'CA', 'United States', 'happiest place on Earth');

-- get recommended places depending on user vacation location city
select name
from Recommended_Places, Travelers
where username = 'gamjaman' AND
    substr(vacation_location, 1, 8) = city

-- get all the local residents in vacation location
select LR.username
from Local_Residents LR, Travelers T, Users U
where LR.username = U.username AND
    substr(T.vacation_location, 1, 8) = substr(U.home_location, 1, 8)

-- list all the recommended places recommended by certain local_resident
select recommend.name
from Local_Residents, recommend
where Local_Residents.username = 'disguised_toast' AND
    Local_Residents.resident_id = recommend.resident_id

-- connect with local resident (fix connect to have 3 digit numbers)
insert into connect values (1, 2);
insert into connect values (2, 1);
insert into connect values (1, 1);

insert into Connections values ('gamjaman', 'disguised_toast');
insert into Connections values ('disguised_toast', 'gamjaman');
insert into Connections values ('gamjaman', 'kiryonth');
insert into Connections values ('kiryonth', 'gamjaman');

-- create an event
insert into Events_List values (1, 'gamjaman');
insert into Events_List values (2, 'sykkuno');
insert into Events_List values (3, 'disguised_toast');
insert into Events values (1, 1, 'sykkuno', '2021-02-23', 'The Grove');
insert into Events values (1, 2, 'gamjaman', '2021-02-23', 'The Grove');
insert into Events values (2, 1, 'disguised_toast', '2021-02-26', 'Disneyland');
insert into Events values (2, 3, 'gamjaman', '2021-02-26', 'Disneyland');

-- all events with user connections
select E.attendee_user, E.event_time, E.location
from Connections C, Events_List EL, Events E
where C.username = 'gamjaman' AND
    C.connection_user = EL.username AND
    EL.events_list_id = E.events_list_id

-- all events with travelers and local_residents for a specific user
select E.attendee_user, E.event_time, E.location
from Connections C, Events_List EL, Events E
where C.username = 'gamjaman' AND
    C.connection_user = EL.username AND
    EL.events_list_id = E.events_list_id
UNION
select E.attendee_user, E.event_time, E.location
from buddyOf B, Events_List EL, Events E
where B.uT_username = 'gamjaman' AND
    B.uB_username = EL.username AND
    EL.events_list_id = E.events_list_id

-- view user connections
select connection_user
from Connections C1
where username = 'gamjaman' AND
    username in (select connection_user
                from Connections C2
                where username = C1.connection_user)

select *
from Connections;

select *
from Events;

select *
from Events_List;

select *
from Local_Residents;

select *
from Recommended_Places;

select *
from Travelers;

select *
from Users;

select *
from buddyOf;

select *
from connect;

select *
from recommend;

select *
from see;