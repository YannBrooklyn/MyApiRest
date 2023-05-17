const mysql = require("mysql")
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const dotenv = require ('dotenv')
dotenv.config({path: "../.env"})
let express = require ('express')
const db = require ('../config/dbconfig')
const generateToken = require('../index')


exports.user = (req, res) => {
    console.log(req.body)
    
    
    const { firstname, surname, email, password, passwordconfirm} = req.body
    db.query('SELECT Email FROM user WHERE Email = ?', [email],  (error, results) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            return console.log("This email is already registred")
        }
        else if (password !== passwordconfirm) {
            return console.log("Not the same password")
        }

        let hashedpassword =  bcrypt.hashSync(password, 8);
        console.log(hashedpassword);
        module.exports = hashedpassword
    
        const newUser = {FirstName: firstname, Surname: surname, Email: email, Password: hashedpassword}
        db.query('INSERT INTO user SET ?', newUser, (error, results) => {
            if (error) {
                console.log("Message d'erreur", error)
                
                return res.status(400)
            } else {
                const user = {id: results.insertId, ...newUser}
                function generateToken(user){                  
                    const payload = {
                        id: user.id,
                        email: user.email,
                        role: user.role,
                        password: user.Password
                    }
                    const options = {
                        expiresIn: process.env.J_EXPIRE_IN
                    }

                    
                    
                    return jwt.sign(payload, process.env.J_SECRET, options)
                }
                
                const token = generateToken(user)
                console.log(results)
                module.exports = token
                
                return res.status(201).json ({
                    message: 'User created successfully',
                    token: token
                })
            }
        })



    })
}

