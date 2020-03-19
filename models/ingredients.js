module.exports = function(sequelize, DataTypes) {
    var ingredients = sequelize.define("Ingredients", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validation: {
            len: [2, 30]
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity:{
          type: DataTypes.INTEGER,
          allowNull: false
      },
      select: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
      }
    });
    return ingredients;
  };