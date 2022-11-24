/**
 * Title: Brand Controller
 * Description: Controller all methods including middlewares
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* internal import */
const brandService = require("../services/brand.service");

/* insert new brand */
exports.insertNewBrand = async (req, res, next) => {
  try {
    const result = await brandService.insertNewBrand(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully created new brand",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all brands */
exports.displayAllBrands = async (req, res, next) => {
  try {
    const result = await brandService.displayAllBrands(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      count: result.length,
      description: "Successfully fetching all brands",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific brand */
exports.displaySpecificBrand = async (req, res, next) => {
  try {
    const result = await brandService.displaySpecificBrand(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching specific brand",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific brand */
exports.updateSpecificBrand = async (req, res, next) => {
  try {
    const result = await brandService.updateSpecificBrand(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific brand",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific category */
exports.removeSpecificBrand = async (req, res, next) => {
  try {
    const result = await brandService.removeSpecificBrand(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully removed specific brand",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
