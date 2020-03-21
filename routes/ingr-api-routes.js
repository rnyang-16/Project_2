var db = require("../models");

module.exports = function(app) {
  app.get("api/ingredients", function(req, res) {
    db.ingredients.findAll({}).then(function(dbIngred) {
      res.json(dbIngred);
    });
  });

  app.get("/api/ingredients/:id", function(req, res) {
    db.ingredients
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbIngred) {
        res.json(dbIngred);
      });
  });

  app.delete("/api/ingredients/:id", function(req, res) {
    db.ingredients
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbIngred) {
        res.json(dbIngred);
      });
  });
};
