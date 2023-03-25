const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('include/login');
})

router.get('/register', (req, res) => {
    res.render('include/register');
})


module.exports = router;