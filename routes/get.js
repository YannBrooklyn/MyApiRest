const express = require ('express')
const router = express.Router()
const getcontroller = require('../controller/get')

router.get('/user/:iduser', getcontroller.user)




module.exports = router