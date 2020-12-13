---------------------------- 20 QUERIES -------------------------

-- 1
insert into Users values ('exampleT', '*********', 'Database', 'Systems', 'exampleT.jpg', 'T', 'example of traveler', 'Merced', 'California', 'United States', 2020);
insert into Users values ('exampleR', '*********', 'Project', 'Phase 2', 'exampleR.jpg', 'R', 'example of resident', 'Merced', 'CA', 'United States', 2020);

-- 2
insert into Travelers(username, vacation_city, vacation_state_or_prov, vacation_country, start_time, end_time) values ('exampleT', 'vacation city', 'vacation state', 'vacation country', 'start time', 'end time');

-- 3
insert into Local_Residents(username) values ('exampleR');

-- 4 buddies of specific traveler
select username
from Travelers
where traveler_id in (select uT_traveler_id
    from buddyOf
    where uB_traveler_id = (select traveler_id
        from Travelers
        where username = 'jenpark')
    union
    select uB_traveler_id
    from buddyOf
    where uT_traveler_id = (select traveler_id
        from Travelers
        where username = 'jenpark'));

-- 5 connections of a traveler
select username
from connect C, Local_Residents LR
where traveler_id = (select traveler_id
        from Travelers
        where username = 'jenpark') AND
    C.resident_id = LR.resident_id;

-- 6 both buddies and connections
select username, name, surname
from Users
where username in (select username
    from Travelers
    where traveler_id in (select uT_traveler_id
        from buddyOf
        where uB_traveler_id = (select traveler_id
            from Travelers
            where username = 'jenpark')
        union
        select uB_traveler_id
        from buddyOf
        where uT_traveler_id = (select traveler_id
            from Travelers
            where username = 'jenpark'))
    union
    select username
    from connect C, Local_Residents LR
    where traveler_id = (select traveler_id
            from Travelers
            where username = 'jenpark') AND
        C.resident_id = LR.resident_id);

-- 7 all recommended places for a traveler
select name
from Recommended_Places, Travelers
where username = 'jenpark' AND
    vacation_city = city AND
    vacation_state_or_prov = state_or_prov AND
    vacation_country = country;

-- 8 to find all the people to buddy or connect
select T1.username as username, name, surname
from (select username
    from Travelers
    where username <> 'jenpark' AND
        vacation_city = (select vacation_city
                        from Travelers
                        where username = 'jenpark') AND
        vacation_state_or_prov = (select vacation_state_or_prov
                        from Travelers
                        where username = 'jenpark') AND
        vacation_country = (select vacation_country
                            from Travelers
                            where username = 'jenpark')
    UNION
    select U.username
    from Travelers T, Users U
    where T.username = 'jenpark' AND
        T.vacation_city = U.home_city AND
        T.vacation_state_or_prov = U.home_state_or_prov AND
        T.vacation_country = U.home_country AND
        U.status = 'R') as T1, Users
where T1.username not in (select username
    from Travelers
    where traveler_id in (select uT_traveler_id
        from buddyOf
        where uB_traveler_id = (select traveler_id
            from Travelers
            where username = 'jenpark')
        union
        select uB_traveler_id
        from buddyOf
        where uT_traveler_id = (select traveler_id
            from Travelers
            where username = 'jenpark'))
    UNION
    select username
    from connect C, Local_Residents LR
    where traveler_id = (select traveler_id
            from Travelers
            where username = 'jenpark') AND
        C.resident_id = LR.resident_id) AND
    T1.username = Users.username;


select T.username as username, name, surname
from (select T.username
    from Travelers T, Users U
    where U.username = 'pinkbean' AND
        T.vacation_city = U.home_city AND
        T.vacation_state_or_prov = U.home_state_or_prov AND
        T.vacation_country = U.home_country AND
        U.status = 'R' AND
        U.username not in (select T.username
            from Travelers T, connect C
            where C.resident_id = (select resident_id
                from Local_Residents
                where username = 'pinkbean') AND
                C.traveler_id = T.traveler_id)) as T, Users
where T.username = Users.username;


select traveler_id
from Travelers
where username = 'jenpark';


select username
from Travelers
where username <> 'jenpark' AND
    vacation_city = (select vacation_city
                     from Travelers
                     where username = 'jenpark') AND
    vacation_state_or_prov = (select vacation_state_or_prov
                       from Travelers
                       where username = 'jenpark') AND
    vacation_country = (select vacation_country
                        from Travelers
                        where username = 'jenpark')
UNION
select U.username
from Travelers T, Users U
where T.username = 'jenpark' AND
    T.vacation_city = U.home_city AND
    T.vacation_state_or_prov = U.home_state_or_prov AND
    T.vacation_country = U.home_country AND
    U.status = 'R'
EXCEPT
select username
from Travelers
where traveler_id in (select uT_traveler_id
    from buddyOf
    where uB_traveler_id = (select traveler_id
        from Travelers
        where username = 'jenpark')
    union
    select uB_traveler_id
    from buddyOf
    where uT_traveler_id = (select traveler_id
        from Travelers
        where username = 'jenpark'))
EXCEPT
select username
from connect C, Local_Residents LR
where traveler_id = (select traveler_id
        from Travelers
        where username = 'jenpark') AND
    C.resident_id = LR.resident_id;

-- 8 all events of a specific traveler (determine with who as well)
select location, event_time, username
from (select event_id, events_list_id_2 as other_user_id
    from contain
    where events_list_id_1 = (select events_list_id
        from Events_List
        where username = 'jenpark')
    union 
    select event_id, events_list_id_1 as other_user_id
    from contain
    where events_list_id_2 = (select events_list_id
        from Events_List
        where username = 'jenpark')) as T, Events, Events_List
where T.event_id = Events.event_id AND
    T.other_user_id = Events_List.events_list_id;

-- 9 insert event
-- insert into Events(event_time, location) values (${req.params.event_time}, ${req.params.location});

insert into contain(events_list_id_1, events_list_id_2) values (select events_list_id
                                                                from Events_List
                                                                where username = 'jenpark',
                                                                select events_list_id
                                                                from Events_List
                                                                where username = other person);

-- 10 register for a new user (done)
insert into Users values ()...;

-- 11 add traveler (done)
insert into Travelers values ()...;

-- 12 add local residents (done)
insert into Local_Residents values ()...;

-- 13 add recommendation (done)
insert into Recommendations values ()...;

insert into recommend values ()...;

-- 14 connect as buddies
insert into buddyOf values ()...;

-- 15 connect as connections
insert into connect values ()....;

-- 16 update profile
update Users set ...;

-- 17 update Event
update Events set ...;

-- 18 delete Event
delete from Events where ...;

-- 19 places residents recommended
select name
from recommend, Local_Residents
where recommend.resident_id = Local_Residents.resident_id AND
    Local_Residents.username = 'applesamsung';

select T.event_id
from (select event_id
    from Events
    where event_time = '2020-11-10' AND
        location = 'Lotte World') as T, contain
where T.event_id = contain.event_id AND
    events_list_id_1 in (select events_list_id
        from Events_List
        where username = 'jenpark' or username = 'moneyman') AND
    events_list_id_2 in (select events_list_id
        from Events_List
        where username = 'jenpark' or username = 'moneyman')


select events_list_id
from Events_List
where username = 'jenpark'


---------------------------- POST -------------------------

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

-- get info of a specific traveler
select *
from Travelers
where username = 'gamjaman';

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


select location, event_time
from contain C, Events E
where C.event_id = E.event_id

select T.event_id, location, event_time, username
from (select event_id, events_list_id_2 as other_user_id
    from contain
    where events_list_id_1 = (select events_list_id
        from Events_List
        where username = 'jenpark')
    union 
    select event_id, events_list_id_1 as other_user_id
    from contain
    where events_list_id_2 = (select events_list_id
        from Events_List
        where username = 'jenpark')) as T, Events, Events_List
where T.event_id = Events.event_id AND
    T.other_user_id = Events_List.events_list_id
order by event_time;
