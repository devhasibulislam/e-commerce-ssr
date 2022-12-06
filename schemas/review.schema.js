/**
 * Title: Review model schema
 * Description: Schema that validate review from user
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create review schema */
const reviewSchema = new mongoose.Schema(
  {
    // for user name
    name: String,

    // for user designation
    designation: String,

    // for user avatar
    avatar: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid avatar URL"],
        default:
          "https://i.pinimg.com/564x/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.jpg",
      },
      public_id: String,
    },

    // for review description
    description: {
      type: String,
      required: [true, "Please, provide your review"],
      trim: true,
      minLength: [50, "Your blog name must be at least 50 characters"],
      maxLength: [300, "Your blog name must be at least 300 characters"],
    },

    // for review time stamps
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

/* create review model schema */
const Review = mongoose.model("Review", reviewSchema);

/* export review schema */
module.exports = Review;
