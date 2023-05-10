let express = require ('express')
const router = express.Router()
const controller = require('../controller/controller.js')

router.get('/', controller.index)
router.get('/users', controller.users)

module.exports = router