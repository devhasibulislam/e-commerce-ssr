/**
 * Title: Build an uploader
 * Description: An uploader convey through multer and cloudinary
 * Author: Hasibul Islam
 * Date: 20/11/2022
 */

/* external imports */
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

/* cloudinary config */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "e-commerce",
      public_id:
        crypto.randomBytes(8).toString("hex") +
        "_" +
        file.originalname.split(" ").join("-"),
    };
  },
});

const uploader = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const supportedImage = /jpg|png|jpeg/i;
    const extension = path.extname(file.originalname);

    if (supportedImage.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Must be a png/jpg/jpeg/ formate"));
    }
  },
  limits: {
    fileSize: 1000000, // <= 1mb
  },
});

module.exports = uploader;
