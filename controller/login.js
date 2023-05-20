const db = require ('../config/dbconfig')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const cookiep = require ('cookie-parser')
const dotenv = require('dotenv')
dotenv.config({path: "../.env"})
require('../config/dbconfig')





        

exports.user = (req, res) => {

    const { email, password } = req.body
    
    
    
    db.query('Select * From User Where Email = ?', [email], (error, results) => {
        
        if (error) {
            console.log(error)
            return res.status(500).json ({error: 'failed to login'})
        }
        else if (results.length === 0){
            return res.status(401) ({error: 'invalid email or password'})
        }

        else {
            console.log(results[0].Password)
            console.log(results[0])
            const bcryptjs = bcrypt.compareSync(password, results[0].Password)
            if (bcryptjs == true) {
                function generateToken(user){  
                    user = {Iduser: results[0].Iduser, ...results[0]}
                    console.log("rrrrrrrrrr", user)            
                    const payload = {
                        Id: user.Iduser
                    }   
                    console.log(payload)
                    const options = {
                        expiresIn: process.env.J_EXPIRES_IN
                    }
                    const token = jwt.sign(payload, process.env.J_SECRET, options)
                    return module.exports = token
                    
                }
                const tokenlogin = generateToken()
                
                return res.status(200).json({message: 'login successfull', token: tokenlogin,})
                
            } 
            else if (bcryptjs == false) {
                console.log('no')
            }
            console.log(bcryptjs)
        }
        // else if (results.length > 0) {
        //     console.log("email correct")
        //         db.query(`Select * From user Where Email = ? AND Password = ?`,  [email, passwordd],  (error, results) => {
            
        //             if (error) {
        //                 console.log("veuillez ressayer", error)
        //                 return res.status (500).json ({error: 'first failed to login'})
        //             }
        //             // const user = {id: results.insertId, ...LogUser}
        //             else if (results) {
                    
        //             }
        //                 // console.log("test", results)
        //                 // function generateToken(user){                  
        //                 //     const payload = {
        //                 //         id: user.id,
        //                 //         email: user.email,
        //                 //         role: user.role,
        //                 //         password: user.Password
        //                 //     }   
        //                 // const options = {
        //                 //     expiresIn: process.env.J_EXPIRE_IN
        //                 // }
    
        //                 // return jwt.sign(payload, process.env.J_SECRET, options)
        //                 // }
    
        //                 // const tokenlogin = token
        //                 // return res.status(200).json({message: 'login successfull', token: tokenlogin,})
    
        //                 return res.status(200).json ({message: "you loged"})
                    
        //         })
        // }
    })
}






