/**
 * Title: Product schema
 * Description: Schema which conduct product validation
 * Author: Hasibul Islam
 * Date: 26/11/2022
 */

/* external import */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

/* create product schema */
const productSchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a product name"],
      trim: true,
      unique: [true, "Same product already exists"],
      minLength: [5, "Product name must be at least 5 characters"],
      maxLength: [50, "Product name would be at most 50 characters"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide product description"],
      trim: true,
      minLength: [10, "Product description must be at least 5 characters"],
      maxLength: [250, "Product description would be at most 50 characters"],
    },

    // for thumbnail
    thumbnail: [
      {
        url: {
          type: String,
          validate: [validator.isURL, "Please provide a valid thumbnail URL"],
          default:
            "https://v2software.com/sites/default/files/field/image/services/products.jpg",
        },
        name: String,
      },
    ],

    // for price
    price: {
      type: Number,
      required: [true, "Must provide valid price for the stock"],
      min: [5, "Price unit won't be less than 5"],
    },

    // for category
    category: {
      type: ObjectId,
      ref: "Category",
    },

    // for brand
    brand: {
      type: ObjectId,
      ref: "Brand",
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

/* create product schema */
const Product = mongoose.model("Product", productSchema);

/* export product schema */
module.exports = Product;
