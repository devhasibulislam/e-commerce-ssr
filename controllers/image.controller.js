/* internal import */
const removeCloudinaryImage = require("../services/image.service");

/* upload an image */
const cloudinaryUpload = async (req, res, next) => {
  try {
    const result = req.file || req.files;

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Insertion successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update an image */
const cloudinaryUpdate = async (req, res, next) => {
  try {
    await removeCloudinaryImage(req.query.public_id);
    const result = req.file;

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Upgradation successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* export cloudinary uploader and updater */
module.exports = { cloudinaryUpload, cloudinaryUpdate };
