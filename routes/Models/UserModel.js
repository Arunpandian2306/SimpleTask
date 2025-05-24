import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import { sequelize } from "../DBConfig/Connection.js";

const UserModel = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "customer"),
      defaultValue: "customer",
    },
  },
  {
    timestamps: true,
    tableName: "users",
  }
);

UserModel.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password_hash = await bcrypt.hash(user.password_hash, salt);
});

export default UserModel;