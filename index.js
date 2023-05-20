let express = require ('express')
const path = require('path')
const app = express()
let bodyParser = require ('body-parser')
const cookieParser = require('cookie-parser')
const jwtcookie  = require('./middleware/jwtcookie.js')
const dotenv = require ('dotenv')
dotenv.config({path: "../.env"})




const publicDirectory = path.join(__dirname, './public')
app.use(express.urlencoded({ extended: false}))
app.use(express.json());

app.use(cookieParser())
app.use(express.urlencoded({ extended: true}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static('static'))
app.use(express.static(publicDirectory))

app.use('/auth', require ('./routes/auth.js'))
app.use('/edit', require ('./routes/edit.js'))
app.use('/delete', require ('./routes/delete.js'))
app.use('/get', require ('./routes/get.js'))
app.use('/get', require ('./routes/users.js'))
app.use('/', require ('./routes/login.js'))
app.use('/', require ('./routes/getme.js'))



    


app.listen(3100)

