const db = require ('../config/dbconfig')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const cookiep = require ('cookie-parser')
require ("dotenv").config
require('http')
require('../config/dbconfig')

exports.user = (req, res) => {

    const {iduser, email, password } = req.body
    db.query('Select Email From User Where Email = ?', [email], (error, results) => {
        
        if (error) {
            console.log(error)
        }
        else if (results.length > 0) {
            console.log("email correct")
            db.query(`Select Password From user Where Email = ? AND Password = ?`, [email, password], (error, results) => {
                if (error) {
                    console.log("veuillez ressayer", error)
                }
                else if (results.length > 0) {
                    console.log("Authentification sucess")
                    const token = jwt.sign({Iduser: 'iduser'}, process.env.ACCESS_TOKEN_SECRET)
                    console.log(token)
                    res.cookiep("token", token, {
                        httpOnly: true,
                        
                    })
                    module.exports = token
                    return
                } else {
                    console.log("wrong password")
                    return
                }
            })
        }
        else {
            console.log("wrong email")
            return
        }
    })
}




// const decoded = jwt.verify(exports.token, process.env.ACCESS_TOKEN_SECRET);
//     console.log(decoded)