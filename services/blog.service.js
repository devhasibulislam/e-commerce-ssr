/* external import */
const cloudinary = require("cloudinary");

/* internal import */
const Blog = require("../schemas/blog.schema");

/* remove image from cloudinary */
async function removeBlogThumbnail(imageID) {
  await cloudinary.uploader.destroy(imageID);
}

/* remove thumbnail while updating */
exports.blogThumbnailUpdate = async (filename) => {
  await removeBlogThumbnail(filename);
};

/* insert a new blog */
exports.insertNewBlog = async (data) => {
  const result = await Blog.create(data);
  return result;
};

/* display all blogs */
exports.displayAllBlogs = async ({ page }) => {
  const contentLimit = process.env.CONTENT_LIMIT;
  const result = await Blog.find()
    .skip((Number(page) - 1) * contentLimit)
    .limit(page && contentLimit);
  return result;
};

/* display specific blog */
exports.displaySpecificBlogs = async ({ id }) => {
  const result = await Blog.findById(id);
  return result;
};

/* update specific blog */
exports.updateSpecificBlog = async (id, data) => {
  const result = await Blog.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true, runValidators: true }
  );
  return result;
};

/* remove specific blog */
exports.removeSpecificBlog = async ({ id }) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};
