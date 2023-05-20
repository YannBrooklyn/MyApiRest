const express = require ('express')
const router = express.Router()
const controller = require('../controller/edit')
const verifyToken = require('../middleware/jwtcookie')






router.put('/user/:iduser', verifyToken ,controller.user)
// router.put('/user/:iduser', jwtcookie ,controller.user)


module.exports = router