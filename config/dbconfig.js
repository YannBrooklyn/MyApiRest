const dotenv = require ("dotenv").config({path : '././.env'});
const mysql = require ("mysql")

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect( (err) => {
    if(err) {
        console.log("----" + err)
    }
    else {
        console.log("Its Good Bro")
    }
})

module.exports = db