const express = require('express');
const path = require('path');

const router = express.Router();
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + './../../views/register.view.html'));

})
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + './../../views/login.view.html'));

})

module.exports = router