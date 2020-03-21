module.exports = function(sequelize, DataTypes) {
    // Add code here to create a Post model
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
    var Ingredients = sequelize.define("Ingredients", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        unique: true,
        primaryKey: true,
        validate:{
          len: [1, 160],
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true
      },
      quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
        notEmpty: true,
      },
      select:{
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
      }
    });
    return Ingredients;
  };
  