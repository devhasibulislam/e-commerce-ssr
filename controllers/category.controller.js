/**
 * Title: Category controller
 * Description: Control request, response and other middlewares
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

const categoryService = require("../services/category.service");

/* internal import */

/* insert new category */
exports.insertNewCategory = async (req, res, next) => {
  try {
    const result = await categoryService.insertNewCategory(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully created new category",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all categories */
exports.displayAllCategories = async (req, res, next) => {
  try {
    const result = await categoryService.displayAllCategories(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      count: result.length,
      description: "Successfully fetching all categories",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific category */
exports.displaySpecificCategory = async (req, res, next) => {
  try {
    const result = await categoryService.displaySpecificCategory(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching specific category",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific category */
exports.updateSpecificCategory = async (req, res, next) => {
  try {
    const result = await categoryService.updateSpecificCategory(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific category",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific category */
exports.removeSpecificCategory = async (req, res, next) => {
  try {
    const result = await categoryService.removeSpecificCategory(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully removed specific category",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
