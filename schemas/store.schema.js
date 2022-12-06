/**
 * Title: Store schema
 * Description: Schema which depict a model that validate information
 * Author: Hasibul Islam
 * Date: 25/11/2022
 */

/* external import */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

/* create store schema */
const storeSchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a valid brand name"],
      trim: true,
      unique: [true, "Same brand already exists"],
      minLength: [5, "Brand name must be at least 5 characters"],
      maxLength: [100, "Brand name would be at most 100 characters"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide brand description"],
      trim: true,
      minLength: [10, "Brand description must be at least 10 characters"],
      maxLength: [250, "Brand description would be at most 250 characters"],
    },

    // for sellers
    sellers: [
      {
        type: ObjectId,
        ref: "User",
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

/* create store schema model */
const Store = mongoose.model("Store", storeSchema);

/* export store schema */
module.exports = Store;
