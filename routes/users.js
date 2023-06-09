const express = require('express')
const router = express.Router()
const userscontroller = require ('../controller/users')
const verifyToken = require('../middleware/jwtcookie')


router.get('/users', verifyToken, userscontroller.users)

module.exports = router