const db = require ('../config/dbconfig')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const cookiep = require ('cookie-parser')
const dotenv = require('dotenv')
dotenv.config({path: "../.env"})
require('../config/dbconfig')
const generateToken = require('./auth')
const user = require('./auth')
const token = require ('./auth')

exports.user = (req, res) => {

    const { email, password } = req.body
    db.query('Select Email From User Where Email = ?', [email], (error, results) => {
        
        if (error) {
            console.log(error)
            return res.status(500).json ({error: 'failed to login'})
        }
        else if (results.length === 0){
            return res.status(401) ({error: 'invalid email or password'})
        }
        else if (results.length > 0) {
            console.log("email correct")
            db.query(`Select Password From user Where Email = ? AND Password = ?`, [email, password],  (error, results) => {
                if (error) {
                    console.log("veuillez ressayer", error)
                    return res.status (500).json ({error: 'failed to login'})
                }
                else  {
                    bcrypt.compare(password, user.Password, (error, isMatch) => {
                        if (error) {
                            console.log(error)
                            return res.status(500).json({ error: 'failed to login'})
                        } else if (isMatch) {
                            const tokenlogin = token
                            return res.status(200).json({message: 'login successfull', token: tokenlogin,})
                        } else {
                            res.status(401).json ({error: 'Invalid email or password'})
                        }
                    })
                }
            })
        }
        else {
            console.log("wrong email")
            return
        }
    })
}






