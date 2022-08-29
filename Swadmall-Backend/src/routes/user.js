const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { signup} = require('../controller/user');



router.post('/signup', signup),




router.post('/signin', (req, res) => {

})
module.exports = router;