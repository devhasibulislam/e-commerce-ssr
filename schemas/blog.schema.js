/**
 * Title: Blog model schema
 * Description: Schema that validate blog from user
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create blog schema */
const blogSchema = new mongoose.Schema(
  {
    // for user name
    name: String,

    // for blog title
    title: {
      type: String,
      required: [true, "Please, provide your blog name"],
      trim: true,
      unique: [true, "Same title already exists"],
      minLength: [5, "Your blog name must be at least 5 characters"],
      maxLength: [100, "Your blog name would be at most 100 characters"],
    },

    // for blog thumbnail
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default:
          "https://www.shutterstock.com/shutterstock/photos/381746308/display_1500/stock-photo-blog-blogging-homepage-social-media-network-concept-381746308.jpg",
      },
      name: String,
    },

    // for blog description
    description: {
      type: String,
      required: [true, "Please, provide your blog name"],
      trim: true,
      minLength: [50, "Your blog name must be at least 50 characters"],
    },

    // for counting likes
    like: {
      type: Number,
      default: 0,
    },

    // for counting watches
    watch: {
      type: Number,
      default: 0,
    },

    // for blog time stamps
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

/* create blog model schema */
const Blog = mongoose.model("Blog", blogSchema);

/* export blog schema */
module.exports = Blog;
