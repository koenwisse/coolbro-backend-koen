"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // - story belongs to space - space has many story
      story.belongsTo(models.space);
    }
  }
  story.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      content: DataTypes.TEXT,
      imageUrl: DataTypes.TEXT,
      spaceId: {
        type: DataTypes.INTEGER,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
