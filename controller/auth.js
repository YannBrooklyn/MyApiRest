const mysql = require("mysql")
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const dotenv = require ('dotenv')
dotenv.config({path: "../.env"})
let express = require ('express')
const db = require ('../config/dbconfig')



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
        const salt = bcrypt.genSaltSync(8)
        const hashedpassword =  bcrypt.hashSync(password, salt)
        console.log(hashedpassword);
    
        const newUser = {FirstName: firstname, Surname: surname, Email: email, Password: hashedpassword}
        db.query('INSERT INTO user SET ?', newUser, (error, results) => {
            if (error) {
                console.log("Message d'erreur", error)
                
                return res.status(400)
            } else {
                console.log("Message de results", results)
                return res.status(200).json ({message: 'user created'})
                
                
            }
        })

        
        
    })
}


