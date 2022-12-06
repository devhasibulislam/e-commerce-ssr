/**
 * Title: Product controller
 * Description: Control methods which hit from router
 * Author: Hasibul Islam
 * Date: 26/11/2022
 */

/* internal import */
const productService = require("../services/product.service");

/* insert new product */
exports.insertNewProduct = async (req, res, next) => {
  try {
    const result = await productService.insertNewProduct(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "New product insert successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all product */
exports.displayAllProducts = async (req, res, next) => {
  try {
    const result = await productService.displayAllProducts(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      count: result.length,
      description: "Successfully fetch all products",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific product */
exports.displaySpecificProduct = async (req, res, next) => {
  try {
    const result = await productService.displaySpecificProduct(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetch specific product",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific product */
exports.updateSpecificProduct = async (req, res, next) => {
  try {
    const result = await productService.updateSpecificProduct(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific product",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific product */
exports.removeSpecificProduct = async (req, res, next) => {
  try {
    const result = await productService.removeSpecificProduct(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully remove specific product",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
