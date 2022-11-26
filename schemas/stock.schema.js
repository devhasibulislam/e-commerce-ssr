/**
 * Title: Stock schema
 * Description: Model which validate stocks
 * Author: Hasibul Islam
 * Date: 25/11/2022
 */

/* external import */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

/* create stock schema */
const stockSchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a valid brand name"],
      trim: true,
      unique: [true, "Same brand already exists"],
      minLength: [5, "Brand name must be at least 5 characters"],
      maxLength: [70, "Brand name would be at most 70 characters"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide brand description"],
      trim: true,
      minLength: [10, "Brand description must be at least 5 characters"],
      maxLength: [250, "Brand description would be at most 50 characters"],
    },

    // for unit
    unit: {
      type: String,
      required: [true, "Must provide stock unit"],
      lowercase: true,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "Stock unit {VALUE} is not correct",
      },
    },

    // for thumbnail
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default:
          "https://play-lh.googleusercontent.com/MQKcmGIPw8KxbzMKNMKj0jSygnHPxeScDUaI75dkXYdD0415w6BdM-1WBSplTNe1TKw",
      },
      public_id: String,
    },

    // for price
    price: {
      type: Number,
      required: [true, "Must provide valid price for the stock"],
      min: [5, "Price unit won't be less than 5"],
    },

    // for quantity
    quantity: {
      type: Number,
      required: [true, "Must provide quantity for the stock"],
      min: [0, "Quantity unit won't be negative"],
    },

    // for categories
    categories: [
      {
        type: ObjectId,
        ref: "Category",
      },
    ],

    // for brands
    brands: [
      {
        type: ObjectId,
        ref: "Brand",
      },
    ],

    // for stores
    stores: [
      {
        type: ObjectId,
        ref: "Store",
      },
    ],

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
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "Stock status {VALUE} is not correct",
      },
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

// validate quantity weather zero or not
stockSchema.pre("save", async function (next) {
  try {
    if (this.quantity <= 0) this.status = "out-of-stock";
    next();
  } catch (error) {
    next(error);
  }
});

/* create brand model schema */
const Stock = mongoose.model("Stock", stockSchema);

/* export stock schema */
module.exports = Stock;
