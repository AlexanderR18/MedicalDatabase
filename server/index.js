
//cd server
//npm run devStart
//DELETE FROM users WHERE username='JohnDoe';

 //const sqlInsert = "INSERT INTO users (username, password) VALUES ('JohnDoe','password123');"
    //db.query(sqlInsert, (err,result)=> {
    //});
    //res.send("welcome");



const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}));
//app.use (express.urlencoded ({extended: false}));
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "userinfo",
    port: 3306,
});


/*
const db = mysql.createConnection({
    host: "medicalclinic16.mysql.database.azure.com",
    user: "medclinic_admin",
    password: "UmaTeam16",
    database: "hospital",
    port: 3306,
});
*/


app.get('/api/get', (req,res) => {

    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
    });

})


app.post("/api/insert", (req,res) => {

    const username = req.body.username;
    const password = req.body.password;
    

    const sqlInsert = "INSERT INTO users (username, password) VALUES (?,?)";
    db.query(sqlInsert, [username, password], (err,result) => {
        //console.log(result);
    });

});

/*
app.get("/", (req,res) => {
    res.send("hello");
});
*/

app.listen(3001, () =>
{
    console.log("running on port 3001");
});

