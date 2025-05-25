import express from "express";
import { authenticateUser } from "../Middleware/AuthenticateJWT.js";
import {
  getTrendingProducts,
  getBestSellingProducts,
} from "../Services/ProductService.js";

const router = express.Router();

router.get("/trending", authenticateUser, getTrendingProducts);
router.get("/best-selling", authenticateUser, getBestSellingProducts);

export default router;
