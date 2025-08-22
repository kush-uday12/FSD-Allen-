
const express = require('express')
const router = express.Router()
const {userDefault,userHome} = require('../controllers/userController')

//localhost:8000/user
router.get('/',userDefault)

//localhost:8000/user/home
router.get('/home',userHome)

module.exports = router