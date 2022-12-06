/**
 * Title: Supplier model schema
 * Description: Schema that validate supplier
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

/* create category schema */
const supplierSchema = new mongoose.Schema(
  {
    // for user full name
    name: {
      type: String,
      required: [true, "Please, provide your full name"],
      trim: true,
      minLength: [3, "Your name must be at least 3 characters"],
      maxLength: [100, "Your name would be at most 100 characters"],
    },

    // for user email
    email: {
      type: String,
      required: [true, "Please, provide your email address"],
      validate: [validator.isEmail, "Provide a valid email address"],
      unique: [true, "Email exists. Please, provide another"],
    },

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

    // for trade license number
    tradeLicenseNumber: {
      type: String,
      unique: [true, "Already exists, try correct one"],
      required: [true, "Please provide your trade license number"],
      minLength: [7, "Trader license number won't be more than 7 digits"],
      maxLength: [7, "Trader license number won't be more than 7 digits"],
    },

    // for user contact number
    phone: {
      type: String,
      required: [
        true,
        "Please, provide your phone number, i.e.: +8801xxxxxxxxx",
      ],
      validate: {
        validator: (value) =>
          validator.isMobilePhone(value, "bn-BD", { strictMode: true }),
        message: "Phone number {VALUE} is not valid. Please, retry",
      },
    },

    // for brands
    brands: [
      {
        type: ObjectId,
        ref: "Brand",
      },
    ],

    // for location
    location: {
      type: String,
      trim: true,
      required: [true, "Please, provide brand location"],
    },

    // for user account status
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    // for user account time stamps
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

/* create supplier model schema */
const Supplier = mongoose.model("Supplier", supplierSchema);

/* export supplier schema */
module.exports = Supplier;
