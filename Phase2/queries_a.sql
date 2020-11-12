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

-- Profile Queries --

-- New User Registration (1 query)
INSERT INTO 
    Users(username, password, name, surname, profile_picture, bio, home_location, age)
VALUES 
    ('ljenkins', '***********', 'Leeroy', 'Jenkins', 'lj.jpg', 'Gamer', 'Portland, OR', 23);

INSERT INTO 
    Users(username, password, name, surname, profile_picture, bio, home_location, age)
VALUES 
    ('jsmith', '***********', 'Joseph', 'Smith', 'lebronBFF.jpg', 'Basketball Player', 'Los Angeles, CA', 35);

INSERT INTO 
    Users(username, password, name, surname, profile_picture, bio, home_location, age)
VALUES 
    ('tswift', '***********', 'Taylor', 'Swift', 'style.jpg', 'Musician', 'Nashville, TN', 30);

INSERT INTO 
    Users(username, password, name, surname, profile_picture, bio, home_location, age)
VALUES 
    ('rwilson', '***********', 'Russell', 'Wilson', 'TD.jpg', 'Football Player', 'Seattle, WA', 31);

SELECT * FROM Users;

-- Edit name, surname, prof pic, bio, home_location, age (6 queries)
-- Have 6 separate queries so user can update what they want, when they want
UPDATE 
    Users 
SET 
    name = 'Joe'
WHERE 
    username = 'jsmith';

SELECT * FROM Users;

-- Resident (1 query)
-- Resident ID corresponds to home_location?
INSERT INTO 
    Local_Residents
VALUES 
    ('rwilson', 2000002);

SELECT * FROM Local_Residents;

-- Reccommend a place (1 query)
INSERT INTO 
    recommend
VALUES 
    (2000002, 'Space Needle');

INSERT INTO 
    recommend
VALUES 
    (2000002, 'CenturyLink Field');

SELECT * FROM recommend;

-- Traveler (1 query)
INSERT INTO 
    Travelers 
VALUES 
    ('ljenkins', 1000001, 'Seattle, WA', '2021-03-14', '2021-03-21');

SELECT * FROM Travelers;

-- Edit trip (1 query)
UPDATE 
    Travelers
SET 
    start_time = '2021-03-18',
    end_time = '2021-03-23'
WHERE 
    username = 'ljenkins';

SELECT * FROM Travelers;

-- Insert recommend into Reccomendations (1 query)
INSERT INTO 
    Recommended_Places
VALUES
    ('Space Needle', 'Seattle', 'WA', 'USA', '605 ft tall tower with rotating restaurant');

INSERT INTO 
    Recommended_Places
VALUES
    ('CenturyLink Field', 'Seattle', 'WA', 'USA', 'Home of Seattle Seahawks');

SELECT * FROM Recommended_Places;

-- View Reccomendations (as ljenkins going to Seattle) (1 query)

SELECT 
    *
FROM 
    Recommended_Places
WHERE 
    city = 'Seattle' AND 
    state_or_province = 'WA' AND 
    country = 'USA'













