const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('layout');
})

router.get('/signin', (req, res) => {
    res.render('include/home');
})


module.exports = router;