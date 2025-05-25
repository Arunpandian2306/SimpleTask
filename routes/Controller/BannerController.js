import express from "express";
import {
  authorizeAdmin,
  authenticateUser,
} from "../Middleware/AuthenticateJWT.js";
import {
  uploadBanner,
  getAllBanners,
  getBannerImageById,
  updateBannerById,
  deleteBannerById,
} from "../Services/BannerService.js";

const router = express.Router();

router.post("/upload-banner", authorizeAdmin, uploadBanner);
router.get("/banners", authenticateUser, getAllBanners);
router.get("/:id", authenticateUser, getBannerImageById);
router.put("/:id", authorizeAdmin, updateBannerById);
router.delete("/:id", authorizeAdmin, deleteBannerById);

export default router;
