/**
 * Title: Banner model schema
 * Description: Schema that validate banner credentials
 * Author: Hasibul Islam
 * Date: 02/12/2022
 */

/* external imports */
const mongoose = require("mongoose");
const validator = require("validator");

/* create banner schema */
const bannerSchema = new mongoose.Schema(
  {
    // for name
    title: String,

    // for description
    description: String,

    // for avatar
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default:
          "https://www.observerbd.com/2022/08/12/observerbd.com_1660309878.jpg",
      },
      public_id: String,
    },

    // for url
    url: {
      type: String,
      default: "https://e-commerce-csr.vercel.app",
      validate: [validator.isURL, "Please provide a valid url"],
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

/* create banner model schema */
const Banner = mongoose.model("Banner", bannerSchema);

/* export banner schema */
module.exports = Banner;
