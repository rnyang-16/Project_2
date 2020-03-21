module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      validate: {
        len: [1, 160]
      }
    },
    image: {
      type: DataTypes.STRING
    },
    usedIngredientCount: {
      type: DataTypes.INTEGER
    },
    missedIngredientCount: {
      type: DataTypes.INTEGER
    }
  });
  return Recipe;
};
