const express = require ('express')
const router = express.Router()
const delcontroller = require('../controller/delete')

const verifyToken = require('../middleware/jwtcookie')

router.delete('/user/:iduser', verifyToken, delcontroller.user)

module.exports = router