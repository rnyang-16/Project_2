module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var Ingredients = sequelize.define("Ingredients", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      unique: true,
      validate: {
        len: [1, 160]
=======
  var ingredients = sequelize.define("Ingredients", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validation: {
        len: [2, 30]
>>>>>>> 3882b7f19025441547a9928f09601bd13a38f6f0
      }
    },
    category: {
      type: DataTypes.STRING,
<<<<<<< HEAD
      allowNull: false,
      notEmpty: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      notEmpty: true
=======
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
>>>>>>> 3882b7f19025441547a9928f09601bd13a38f6f0
    },
    select: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
<<<<<<< HEAD
  return Ingredients;
=======
  return ingredients;
>>>>>>> 3882b7f19025441547a9928f09601bd13a38f6f0
};
