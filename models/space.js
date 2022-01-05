"use strict";
const { Model } = require("sequelize");
const story = require("./story");
module.exports = (sequelize, DataTypes) => {
  class space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //- space belongs to user - user has one space
      space.belongsTo(models.user);
      // - story belongs to space - space has many story
      space.hasMany(models.story);
    }
  }
  space.init(
    {
      title: {
        type: DataTypes.STRING,
        unique: true,
      },

      description: DataTypes.TEXT,

      backgroundColor: {
        type: DataTypes.STRING,
        defaultValue: "#fffff",
      },

      color: {
        type: DataTypes.STRING,
        defaultValue: "#000000",
      },

      userId: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "space",
    }
  );
  return space;
};
