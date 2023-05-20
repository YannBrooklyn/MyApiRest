const express = require('express')
const router = express.Router()
const getmecontroller = require('../controller/getme')
const verifyToken = require('../middleware/jwtcookie')

router.get('/me', verifyToken, getmecontroller.user)

module.exports = router