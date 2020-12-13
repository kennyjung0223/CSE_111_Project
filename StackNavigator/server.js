const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config({ path: './.env' });

const connection = mysql.createPool({
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE,
  multipleStatements: true
});

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/user/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select * from Users where username = '${req.params.username}'`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.get('/recommendations/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select * from Recommended_Places, Travelers 
                          where username = '${req.params.username}' and 
                          vacation_city = city and
                          vacation_state_or_prov = state_or_prov AND
                          vacation_country = country;`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.get('/recommended_places/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select name
                        from recommend, Local_Residents
                        where recommend.resident_id = Local_Residents.resident_id AND
                            Local_Residents.username = '${req.params.username}';`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.get('/get_status/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select status from Users where username = '${req.params.username}'`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.get('/connections/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select *
                          from Users
                          where username in (select username
                            from Travelers
                            where traveler_id in (select uT_traveler_id
                                from buddyOf
                                where uB_traveler_id = (select traveler_id
                                    from Travelers
                                    where username = '${req.params.username}')
                                union
                                select uB_traveler_id
                                from buddyOf
                                where uT_traveler_id = (select traveler_id
                                    from Travelers
                                    where username = '${req.params.username}'))
                            union
                            select username
                            from connect C, Local_Residents LR
                            where traveler_id = (select traveler_id
                                    from Travelers
                                    where username = '${req.params.username}') AND
                                C.resident_id = LR.resident_id);`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})



app.get('/events/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select T.event_id as other_user_event_id, location, event_time, username
                        from (select event_id, events_list_id_2 as other_user_id
                            from contain
                            where events_list_id_1 = (select events_list_id
                                from Events_List
                                where username = '${req.params.username}')
                        union
                        select event_id, events_list_id_1 as other_user_id
                        from contain
                        where events_list_id_2 = (select events_list_id
                            from Events_List
                            where username = '${req.params.username}')) as T, Events, Events_List
                    where T.event_id = Events.event_id AND
                        T.other_user_id = Events_List.events_list_id
                    order by event_time;`, (error, results) => {
            if (error) {
                throw error;
            }
            for (let i = 0; i < results.length; i++) {
                results[i].event_time = results[i].event_time.toString().substring(0, 15);
            }
            res.send(results);
        })
    })
})

app.get('/vacation_location/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select vacation_city, vacation_country
                          from Travelers
                          where username = '${req.params.username}';`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.get('/to_connectT/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select T1.username as username, name, surname, bio, status
        from (select username
            from Travelers
            where username <> '${req.params.username}' AND
                vacation_city = (select vacation_city
                                from Travelers
                                where username = '${req.params.username}') AND
                vacation_state_or_prov = (select vacation_state_or_prov
                                from Travelers
                                where username = '${req.params.username}') AND
                vacation_country = (select vacation_country
                                    from Travelers
                                    where username = '${req.params.username}')
            UNION
            select U.username
            from Travelers T, Users U
            where T.username = '${req.params.username}' AND
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
                    where username = '${req.params.username}')
                union
                select uB_traveler_id
                from buddyOf
                where uT_traveler_id = (select traveler_id
                    from Travelers
                    where username = '${req.params.username}'))
            UNION
            select username
            from connect C, Local_Residents LR
            where traveler_id = (select traveler_id
                    from Travelers
                    where username = '${req.params.username}') AND
                C.resident_id = LR.resident_id) AND
            T1.username = Users.username;`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.get('/to_connectR/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select T.username as username, name, surname, bio, status
        from (select T.username
            from Travelers T, Users U
            where U.username = '${req.params.username}' AND
                T.vacation_city = U.home_city AND
                T.vacation_state_or_prov = U.home_state_or_prov AND
                T.vacation_country = U.home_country AND
                U.status = 'R' AND
                U.username not in (select T.username
                    from Travelers T, connect C
                    where C.resident_id = (select resident_id
                        from Local_Residents
                        where username = '${req.params.username}') AND
                        C.traveler_id = T.traveler_id)) as T, Users
        where T.username = Users.username;`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

// traveler registration
app.post('/traveler/:name/:age/:username/:password/:country/:state/:city/:v_country/:v_state/:v_city/:start_date/:end_date', (req, res) => {
    let names = req.params.name.split(" ");

    connection.getConnection((err, connection) => {
        connection.query(`insert into Users(username, password, name, surname, status, home_city, home_state_or_prov, home_country, age) 
                                                    values ('${req.params.username}', 
                                                    '${req.params.password}', 
                                                    '${names[0]}', 
                                                    '${names[1]}',  
                                                    'T', 
                                                    '${req.params.city}', 
                                                    '${req.params.state}', 
                                                    '${req.params.country}', 
                                                    ${req.params.age});
                                                    insert into Travelers(username, vacation_city, vacation_state_or_prov, vacation_country, start_time, end_time) 
                        values ('${req.params.username}',
                                '${req.params.v_city}',
                                '${req.params.v_state}',
                                '${req.params.v_country}',
                                '${req.params.start_date}',
                                '${req.params.end_date}');`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

// registration for local residents
app.post('/local_resident/:name/:age/:username/:password/:country/:state/:city', (req, res) => {
    let names = req.params.name.split(" ");

    connection.getConnection((err, connection) => {
        connection.query(`insert into Users(username, password, name, surname, status, home_city, home_state_or_prov, home_country, age) 
                                                    values ('${req.params.username}', 
                                                    '${req.params.password}', 
                                                    '${names[0]}', 
                                                    '${names[1]}',  
                                                    'R', 
                                                    '${req.params.city}', 
                                                    '${req.params.state}', 
                                                    '${req.params.country}', 
                                                    ${req.params.age});
                                                    insert into Local_Residents(username) 
                        values ('${req.params.username}');`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

// get local resident ID (needed for post request for adding recommendations)
app.get('/local_resident_id/:username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`select resident_id from Local_Residents where username = '${req.params.username}'`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

// adding recommendations
app.post('/add_recommendation/:username/:resident_id/:location_name/:city/:state/:country/:description', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`insert into Recommended_Places values('${req.params.location_name}', 
                                                                '${req.params.city}', 
                                                                '${req.params.state}', 
                                                                '${req.params.country}', 
                                                                '${req.params.description}');
                        insert into recommend values(${req.params.resident_id}, '${req.params.location_name}')`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

// add event
app.post('/add_event/:event_location/:date/:user1/:user2', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`insert into Events(event_time, location) values ('${req.params.date}', '${req.params.event_location}');
                        insert into contain(events_list_id_1, events_list_id_2) values ((select events_list_id
                                                                                         from Events_List
                                                                                         where username = '${req.params.user1}'), 
                                                                                        (select events_list_id
                                                                                         from Events_List
                                                                                         where username = '${req.params.user2}'));`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

// connecting
app.post('/connect_resident/:username/:other_username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`insert into connect values ((select traveler_id
                                                        from Travelers
                                                        where username = '${req.params.username}'),
                                                        (select resident_id
                                                        from Local_Residents
                                                        where username = '${req.params.other_username}'));`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

// buddying
app.post('/connect_buddy/:username/:other_username', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`insert into buddyOf values ((select traveler_id
                                                        from Travelers
                                                        where username = '${req.params.username}'),
                                                        (select traveler_id
                                                        from Travelers
                                                        where username = '${req.params.other_username}'));`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.put('/edit_profile/:username/:bio', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`update Users set bio = '${req.params.bio}' where username = '${req.params.username}'`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.put('/edit_event/:date/:location/:event_id', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`update Events set event_time = '${req.params.date}', location = '${req.params.location}' where event_id = ${req.params.event_id}`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.delete('/delete_event/:event_id', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`delete from Events where event_id = ${req.params.event_id};
                            delete from contain where event_id = ${req.params.event_id};`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

app.post('/endpoint', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`query`, (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results);
        })
    })
})

// app.put('/update/bio/:username', (req, res) => {
//     connection.getConnection((err, connection) => {
//         connection.query(`update Users set bio = `)
//     })
// })

app.listen(3000, () => {
    console.log('Go to http://ip_address:3000/ so you can see the data.');
})