
const fs = require('fs');

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
    host: "medicalclinic16.mysql.database.azure.com",
    user: "medclinic_admin",
    password: "UmaTeam16",
    database: "hospital",
    port: 3306,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")
    } 
});

app.get("/", (req,res) => {
    res.json("hello");
});

app.get('/api/get', (req,res) => {

    const sqlSelect = "SELECT * FROM administration";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
    });

})


app.post("/api/insert", (req,res) => {

    const sqlInsert = "INSERT INTO administration (`admin_name`, `admin_occupation`, `clinic_ID`, `admin_phone`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.password,
        req.body.clinic_ID,
        req.body.phone,
    ]
    
        
    db.query(sqlInsert, [values], (err,result) => {
        if(err) return res.json(err)
        return res.json("data inserted")
    });
});



app.listen(3001, () =>
{
    console.log("running on port 3001");
});

