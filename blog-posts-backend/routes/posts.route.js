const EXPRESS = require('express');
const postsRouter = EXPRESS.Router();
const PostController = require("../controllers/posts.controller")


// postsRouter.get("/:tags/:sortBy?/:direction?", PostController.getPosts)
postsRouter.get("/", PostController.getPosts)

module.exports = postsRouter

