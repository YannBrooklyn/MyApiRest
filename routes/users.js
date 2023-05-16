const express = require('express')
const router = express.Router()
const userscontroller = require ('../controller/users')

const getcontroller = require('../controller/get')

router.get('/user/:iduser', getcontroller.user)

router.get('/users', userscontroller.users)

module.exports = router