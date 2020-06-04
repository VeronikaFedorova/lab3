const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
//describe mothods
router.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
});
router.post("/", async (req, res) => {
  const postData = {
    title: req.body.title,
    text: req.body.text,
  };
  const post = new Post(postData);
  await post.save();
  res.status(201).json(post);
});
router.delete("/:postid", async (req, res) => {
  await Post.remove({ _id: req.params.postId });
  res.status(200).json({
    message: "Видалено",
  });
});

module.exports = router;
