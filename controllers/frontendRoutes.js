const express = require('express');
const router = express.Router();
const {User,Blog, Comment} = require('../models');


router.get('/', (req, res) => {
    Blog.findAll().then(blogs => {
        const hbsBlogs = blogs.map(blog=>blog.get({plain:true}))
        res.render('home', {blogs:hbsBlogs})
    })
})

router.get("/login",(req,res)=>{
    res.render("login")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})

router.get("/dashboard",(req,res)=>{
    if(!res.session.user) {
        return res.redirect('/login')
    }
    res.render("dashboard")
})

module.exports = router;