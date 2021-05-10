const express = require('express')

const router = express.Router()

const authRegister =  require('../controllers/user')


router.post('/users/signup', authRegister.register)
router.post('/users/signin', authRegister.login)



module.exports = router