/**
 * Title: Blog controller
 * Description: Control request, response and other middlewares
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* internal import */
const blogService = require("../services/blog.service");

/* insert a new blog */
exports.insertNewBlog = async (req, res, next) => {
  try {
    const result = await blogService.insertNewBlog(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Blog insertion successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all blogs */
exports.displayAllBlogs = async (req, res, next) => {
  try {
    const result = await blogService.displayAllBlogs(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching all blogs",
      count: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific blog */
exports.displaySpecificBlogs = async (req, res, next) => {
  try {
    const result = await blogService.displaySpecificBlogs(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching specific blog",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific blog */
exports.updateSpecificBlog = async (req, res, next) => {
  try {
    const result = await blogService.updateSpecificBlog(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific blog",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific blog */
exports.removeSpecificBlog = async (req, res, next) => {
  try {
    const result = await blogService.removeSpecificBlog(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully removed specific blog",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
