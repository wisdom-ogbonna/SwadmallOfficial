const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { signup, signin, requireSignin} = require('../controller/auth');



router.post('/signup', signup),




router.post('/signin', signin)
module.exports = router;


router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ user: 'profile'})
})


