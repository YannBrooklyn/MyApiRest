const db = require ('../config/dbconfig')
const jwt = require ('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({path: "../.env"})
require('../config/dbconfig')
const token = require ('./login')
const verifyToken = require('../middleware/jwtcookie')
const bcrypt = require('bcryptjs')
let idUser = "";



exports.user = (req, res) => {
    
    const tokenHeaders = req.headers.authorization
    jwt.verify(tokenHeaders, process.env.J_SECRET, (error, decode) => {
        console.log("tokengetme", tokenHeaders)
        console.log("dedece", decode)
        idUser = decode.Id
    })
    db.query('Select * From User Where IdUser = ?', idUser, (error, results) => {
        console.log(idUser)
        
        if (error) {
            console.log("getme error", error)
            return res.status(500).json ({error: 'failed to get these information'})
        }
        else if ("get me results", results.length > 0) {
            console.log(results)
            
        }
        else {
            console.log("t'es pas co", error)
        }
    })
}