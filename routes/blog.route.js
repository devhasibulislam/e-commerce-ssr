/**
 * Title: Blog router credentials
 * Description: Where to pass out throughout route credentials
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external import */
const express = require("express");

/* internal imports */
const blogController = require("../controllers/blog.controller");
const uploader = require("../middlewares/cloudinaryUpload.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */
// upload & update blog thumbnail
router
  .route("/thumbnail")
  .post(uploader.single("thumbnail"), blogController.blogThumbnailUpload)
  .patch(uploader.single("thumbnail"), blogController.blogThumbnailUpdate);

// post and get a blog
router
  .route("/")
  .post(blogController.insertNewBlog)
  .get(blogController.displayAllBlogs);

// get, update & delete specific blog
router
  .route("/:id")
  .get(blogController.displaySpecificBlogs)
  .patch(blogController.updateSpecificBlog)
  .delete(blogController.removeSpecificBlog);

/* export blog router */
module.exports = router;
