const express = require ('express')
const router = express.Router()
const getcontroller = require('../controller/get')
const verifyToken = require('../middleware/jwtcookie')

router.get('/user/:iduser',verifyToken, getcontroller.user)




module.exports = router