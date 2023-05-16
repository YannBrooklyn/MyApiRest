const express = require ('express')
const router = express.Router()
const controller = require('../controller/edit')
const { jwtcookie } = require('../middleware/jwtcookie')
const { token } = require('../controller/login')





router.put('/user/:iduser', jwtcookie ,controller.user)



module.exports = router