const express = require('express')
const authController = require('../controller/auth')
const router = express.Router();

router.post('/user', authController.user)



module.exports = router;