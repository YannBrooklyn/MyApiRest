const db = require ('../config/dbconfig')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
require ("dotenv").config


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
                    const username = {name: iduser}

                    const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)
                    res.json({ accessToken: accessToken})
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


function authentificateToken(req, res, nex) {
    
}