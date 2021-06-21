const express = require('express');
// const mysql = require('mysql');
const routes = require('./settings/routes.js');

const port = 5000;
const app = express();
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "express"
// });

app.use(express.json());
routes(app);

async function startApp() {
    try {        
        // connection.query("DROP TABLE IF EXISTS books", function(err, results) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Table books dropped");
        //     }
        // });
        // connection.query('CREATE TABLE books (id INT PRIMARY KEY AUTO_INCREMENT, author varchar(255), title varchar(255), date datetime, image varchar(255),  description varchar(255))', function(err, results) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Table books created");
        //     }
        // });
        app.listen(port, () => console.log('SERVER STARTED ON PORT ' + port));
    } catch (e) {
        console.log(e);
    }
}
startApp();
