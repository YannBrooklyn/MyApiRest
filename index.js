let express = require ('express')
let app = express()
let bodyParser = require ('body-parser')
const router = require ("./routes/router.js")
const mysql = require ("mysql")
const dotenv = require ("dotenv").config({path : './.env'});

console.log(process.env.CHOCOLAT_KEY)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydatabase'
});

db.connect( (err) => {
    if(err) {
        console.log("----" + err)
    }
    else {
        console.log("Its Good Bro")
    }
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static('static'))
app.use(router)

app.listen(3100)