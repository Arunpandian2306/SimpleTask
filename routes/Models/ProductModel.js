import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import { sequelize } from "../DBConfig/Connection.js";

const ProductModel = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    soldcount: {
      type: DataTypes.INTEGER,
      defaultValue: 0, 
    },
    viewcount: {
      type: DataTypes.INTEGER,
      defaultValue: 0, 
    },
  },
  {
    tableName: "products",
    timestamps: true,
  }
);

export default ProductModel;
