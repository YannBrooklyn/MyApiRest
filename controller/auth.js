const mysql = require("mysql")
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')

let express = require ('express')
const db = require ('../config/dbconfig')





exports.user = (req, res) => {
    console.log(req.body)
    
    
    const { firstname, surname, email, password, passwordconfirm} = req.body
    db.query('SELECT Email FROM user WHERE Email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            return console.log("This email is already registred")
        }
        else if (password !== passwordconfirm) {
            return console.log("Not the same password")
        }

        let hashedpassword = await bcrypt.hash(password, 8);
        console.log(hashedpassword);
        res.send("Form Submitted")

        db.query('INSERT INTO user SET ?', {FirstName: firstname, Surname: surname, Email: email, Password: hashedpassword}, (error, results) => {
            if (error) {
                console.log("Message d'erreur", error)
                return res.status(400)
            } else {
                console.log("Message de results", results)
                
                return res.status(201)
            }
        })



    })
}

