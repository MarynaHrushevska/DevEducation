const response = require('../response');
const mysql = require('../settings/mysql.js');

exports.books = (req, res) => {

    mysql.query('select * from `books`', (error, rows, fields) => {
        if (error) {
            console.log("Ошибка: " + error);
        }
        else {
            response.status(rows, res);
        }
    });
}
exports.add = (req, res) => {
    const sql = "INSERT INTO `books` VALUES ('" + req.query.id + "', '" + req.query.author + "', '" + req.query.title + "', '" + req.query.date + "', '" + req.query.image + "', '" + req.query.description + "')";

    mysql.query(sql, (error, results) => {
        if (error) {
            console.log("Ошибка: " + error);
        }
        else {
            response.status(results, res);
        }
    })
}
exports.getBookById = (req, res) => {
    const sql1 = "SELECT * FROM `books` WHERE id=2";

    mysql.query(sql1, (error, results) => {
        if (error) {
            console.log("Ошибка: " + error);
        }
        else {
            response.status(results, res);
        }
    })
}
// exports.booksById = (req, res) => {
//     const sql1 = "UPDATE `books` SET ('" + req.query.author + "', '" + req.query.title + "', '" + req.query.date + "', '" + req.query.image + "', '" + req.query.description + "') WHERE id=('" + req.query.id + "')";

//     mysql.query(sql1, (error, results) => {
//         if (error) {
//             console.log("Ошибка: " + error);
//         }
//         else {
//             response.status(results, res);
//         }
//     })
// }