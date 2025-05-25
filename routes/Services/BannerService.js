import BannerModel from "../Models/BannerModel.js";

// Create banner
export const uploadBanner = async (req, res) => {
  try {
    const { title, image } = req.body;

    if (!title || !image) {
      return res.status(400).json({ message: "Title and image are required" });
    }

    const banner = await BannerModel.create({ title, image });
    res.status(201).json({ message: "Banner created", banner });
  } catch (err) {
    res.status(422).json({ message: "Upload failed", error: err.message });
  }
};

// Get all banner IDs and titles
export const getAllBanners = async (req, res) => {
  try {
    const banners = await BannerModel.findAll({
      attributes: ["id", "title"],
    });
    res.json(banners);
  } catch (err) {
    res
      .status(422)
      .json({ message: "Failed to fetch banners", error: err.message });
  }
};

// Get only image by ID
export const getBannerImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await BannerModel.findByPk(id);

    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    // Detect MIME type from base64 (if stored with prefix)
    const base64Data = banner.image;
    const matches = base64Data.match(/^data:(.+);base64,(.+)$/);

    if (!matches || matches.length !== 3) {
      return res.status(400).json({ message: "Invalid base64 image format" });
    }

    const mimeType = matches[1];
    const imageBuffer = Buffer.from(matches[2], "base64");

    res.setHeader("Content-Type", mimeType);
    res.send(imageBuffer);
  } catch (err) {
    res
      .status(422)
      .json({ message: "Error fetching image", error: err.message });
  }
};

// Update title and image by ID
export const updateBannerById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, image } = req.body;

    const banner = await BannerModel.findByPk(id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    banner.title = title || banner.title;
    banner.image = image || banner.image;
    await banner.save();

    res.json({ message: "Banner updated", banner });
  } catch (err) {
    res.status(422).json({ message: "Update failed", error: err.message });
  }
};

// Delete banner by ID
export const deleteBannerById = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await BannerModel.findByPk(id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    await banner.destroy();
    res.json({ message: "Banner deleted" });
  } catch (err) {
    res.status(422).json({ message: "Delete failed", error: err.message });
  }
};
