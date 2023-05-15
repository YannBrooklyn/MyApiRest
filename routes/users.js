const express = require('express')
const router = express.Router()
const userscontroller = require ('../controller/users')

router.get('/users', userscontroller.users)

module.exports = router