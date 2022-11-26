/* external import */
const cloudinary = require("cloudinary");

/* remove image from cloudinary */
module.exports = async (public_id) => {
  await cloudinary.uploader.destroy(public_id);
}
