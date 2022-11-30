import { Sequelize } from "sequelize";
import db from "../../config/db.config.js";

const { DataTypes } = Sequelize;

const Post = db.define(
  "settings",
  {
    app_nama: DataTypes.STRING,
    app_namapendek: DataTypes.STRING,
    created_at: {
      field: "created_at",
      type: Sequelize.DATE,
    },
    updated_at: {
      field: "updated_at",
      type: Sequelize.DATE,
    },
  },
  {
    // freezeTableName: true,
    // sequelize,
    modelName: "settings",
    underscored: true,
    timestamps: false,
  }
);

export default Post;

(async () => {
  await db.sync();
})();
