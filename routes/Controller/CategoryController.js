import express from "express";
import { authorizeAdmin,authenticateUser } from "../Middleware/AuthenticateJWT.js";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  listCategories,
} from "../Services/CategoryService.js";

const router = express.Router();

router.post("/create", authorizeAdmin, createCategory);
router.put("/:id", authorizeAdmin, updateCategory);
router.delete("/:id", authorizeAdmin, deleteCategory);
router.get("/list", authenticateUser, listCategories);

export default router;