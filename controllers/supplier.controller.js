/**
 * Title: Supplier controller
 * Description: Control all methods and middlewares
 * Author: Hasibul Islam
 * Date: 24/11/2022
 */

/* internal import */
const supplierService = require("../services/supplier.service");

/* insert new supplier */
exports.insertNewSupplier = async (req, res, next) => {
  try {
    const result = await supplierService.insertNewSupplier(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully created new supplier",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all supplier */
exports.displayAllSupplier = async (req, res, next) => {
  try {
    const result = await supplierService.displayAllSupplier(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      count: result.length,
      description: "Successfully fetching all supplier",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific supplier */
exports.displaySpecificSupplier = async (req, res, next) => {
  try {
    const result = await supplierService.displaySpecificSupplier(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching specific supplier",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific supplier */
exports.updateSpecificSupplier = async (req, res, next) => {
  try {
    const result = await supplierService.updateSpecificSupplier(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific supplier",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific supplier */
exports.removeSpecificSupplier = async (req, res, next) => {
  try {
    const result = await supplierService.removeSpecificSupplier(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully removed specific supplier",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
