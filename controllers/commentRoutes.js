const express = require("express");
const router = express.Router();
const {User, Blog, Comment} = require("../models");

router.get("/", (req, res) => {
    Comment.findAll({include:[User, Blog]})
      .then(dbComments => {
        res.json(dbComments);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

router.get("/:id", (req, res) => {
    Comment.findByPk(req.params.id,{include:[User, Blog]})
      .then(dbComment => {
        res.json(dbComment);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});

router.post("/", (req, res) => {
    if(!req.session.user){
      return res.status(401).json({msg:"Please login first!"})
  }
    Comment.create({
      body:req.body.body,
      user_id:req.session.user.id,
    //   TODO: add date here
    //   date: req.session.date,
    })
      .then(newBlog => {
        res.json(newBlog);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});

router.put("/:id", (req, res) => {
    if(!req.session.user){
        return res.status(401).json({msg:"Please login first!"})
    }
      // TODO: Ensure user updating is original author
    Comment.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedComment => {
      res.json(updatedComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.delete("/:id", (req, res) => {
    if(!req.session.user){
        return res.status(401).json({msg:"Please login first!"})
    }
      // TODO: Ensure user deleting is original author
    Comment.destroy({
      where: {
        id: req.params.id
      }
    }).then(delComment => {
      res.json(delComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
  
module.exports = router;