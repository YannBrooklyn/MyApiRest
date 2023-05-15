const express = require ('express')
const router = express.Router()
const controller = require('../controller/edit')





router.put('/user/:iduser', controller.user)



module.exports = router