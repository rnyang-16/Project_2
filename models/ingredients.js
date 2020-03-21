module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define("Ingredients", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      unique: true,
      validate: {
        len: [1, 160]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      notEmpty: true
    },
    select: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  return Ingredients;
};
