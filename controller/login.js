const db = require ('../config/dbconfig')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const cookiep = require ('cookie-parser')
require ("dotenv").config
require('http')
require('../config/dbconfig')

exports.user = (req, res) => {

    const { email, password } = req.body
    db.query('Select Email From User Where Email = ?', [email], (error, results) => {
        
        if (error) {
            console.log(error)
        }
        else if (results.length > 0) {
            console.log("email correct")
            db.query(`Select Password From user Where Email = ? AND Password = ?`, [email, password], async (error, results) => {
                if (error) {
                    console.log("veuillez ressayer", error)
                }
                else if (results.length > 0 && await bcrypt.compare(password, results.password)) {
                    console.log("Authentification sucess")
                    
                    const token = jwt.sign({Iduser: 'iduser'}, process.env.ACCESS_TOKEN_SECRET)
                    
                    console.log(token)
                    module.exports = token
                    
                    return res.redirect('/')
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






