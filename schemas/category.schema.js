/**
 * Title: Category model schema
 * Description: Schema that validate category from user
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create category schema */
const categorySchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a valid category name"],
      trim: true,
      lowercase: true,
      unique: [true, "Same category already exists"],
      minLength: [5, "Category name must be at least 5 characters"],
      maxLength: [50, "Category name would be at most 50 characters"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide category description"],
      trim: true,
      minLength: [10, "Category name must be at least 5 characters"],
      maxLength: [250, "Category name would be at most 50 characters"],
    },

    // for thumbnail
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default: "https://flatsome.xyz/wp-content/uploads/2022/06/category.jpg",
      },
      name: String,
    },

    // for category  time stamps
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

/* create category model schema */
const Category = mongoose.model("Category", categorySchema);

/* export category schema */
module.exports = Category;
