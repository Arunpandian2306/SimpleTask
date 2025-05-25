import { DataTypes } from "sequelize";
import { sequelize } from "../DBConfig/Connection.js";

const BannerModel = sequelize.define(
  "Banner",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  },
  {
    tableName: "banners",
    timestamps: true,
  }
);

export default BannerModel;
