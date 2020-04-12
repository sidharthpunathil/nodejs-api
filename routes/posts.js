const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//ROUTES

router.get('/',(req, res)=> {
    res.send("We are on post");
})

router.get('/specific',(req, res)=> {
    res.send("Specific post");
})

router.post('/', (req,res) => {
    console.log(req.body);
})

module.exports = router;