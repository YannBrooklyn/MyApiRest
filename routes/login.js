const express = require ('express')
const router = express.Router()
const logincontroller = require ('../controller/login')
const db = require ('../config/dbconfig')
const jwt = require ('jsonwebtoken')


router.post('/login', logincontroller.user, (req, res) =>  {
    
})




module.exports = router