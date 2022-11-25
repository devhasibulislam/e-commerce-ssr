/**
 * Title: Stock controller
 * Description: Control methods which hit from rote
 * Author: Hasibul Islam
 * Date: 25/11/2022
 */

/* internal import */
const stockService = require("../services/stock.service");

/* insert new stock */
exports.insertNewStock = async (req, res, next) => {
  try {
    const result = await stockService.insertNewStock(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully created new stock",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all stock */
exports.displayAllStocks = async (req, res, next) => {
  try {
    const result = await stockService.displayAllStocks(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      count: result.length,
      description: "Successfully fetching all stocks",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific stock */
exports.displaySpecificStock = async (req, res, next) => {
  try {
    const result = await stockService.displaySpecificStock(req.params);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching specific stock",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific stock */
exports.updateSpecificStock = async (req, res, next) => {
  try {
    const result = await stockService.updateSpecificStock(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully update specific stock",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific stock */
exports.removeSpecificStock = async (req, res, next) => {
  try {
    const result = await stockService.removeSpecificStock(req.params);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully removed specific stock",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
