import ProductModel from "../Models/ProductModel.js";

export const getTrendingProducts = async (req, res) => {
  try {
    const trendingProducts = await ProductModel.findAll({
      order: [["viewcount", "DESC"]],
      limit: 10,
    });
    res.json(trendingProducts);
  } catch (error) {
    res.status(422).json({
      message: "Error fetching trending products",
      error: error.message,
    });
  }
};

export const getBestSellingProducts = async (req, res) => {
  try {
    const bestSellingProducts = await ProductModel.findAll({
      order: [["soldcount", "DESC"]],
      limit: 10,
    });
    res.json(bestSellingProducts);
  } catch (error) {
    res.status(422).json({
      message: "Error fetching best-selling products",
      error: error.message,
    });
  }
};
