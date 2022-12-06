/**
 * Title: Brand model schema
 * Description: Schema that validate brand from user
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

/* create brand schema */
const brandSchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a valid brand name"],
      trim: true,
      uppercase: true,
      unique: [true, "Same brand already exists"],
      minLength: [3, "Brand name must be at least 3 characters"],
      maxLength: [50, "Brand name would be at most 50 characters"],
    },

    // for email
    email: {
      type: String,
      lowercase: true,
      required: [true, "Please, provide a valid brand email"],
      validate: [validator.isEmail, "Please provide a valid email address"],
    },

    // for website
    website: {
      type: String,
      lowercase: true,
      required: [true, "Please, provide a valid brand website url"],
      validate: [validator.isURL, "Please provide a valid brand website url"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide brand description"],
      trim: true,
      minLength: [10, "Brand description must be at least 10 characters"],
      maxLength: [250, "Brand description would be at most 250 characters"],
    },

    // for logo
    logo: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid logo URL"],
        default:
          "https://www.lucidadvertising.com/wp-content/uploads/2020/07/Brand_Dev-1.jpg",
      },
      public_id: String,
    },

    // for location
    location: {
      type: String,
      trim: true,
      required: [true, "Please, provide brand location"],
    },

    // for suppliers
    suppliers: [
      {
        type: ObjectId,
        ref: "Supplier",
      },
    ],

    // for products
    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],

    // for status
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
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

/* create brand model schema */
const Brand = mongoose.model("Brand", brandSchema);

/* export brand schema */
module.exports = Brand;
