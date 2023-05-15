const express = require ('express')
const router = express.Router()
const delcontroller = require('../controller/delete')

router.delete('/user/:iduser', delcontroller.user)

module.exports = router