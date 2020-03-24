var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/api/ingredients", isAuthenticated, function(req, res) {
    db.ingredients.findAll({}).then(function(dbIngred) {
      res.json(dbIngred);
    });
  });

  //   returns single ingredient
  app.get("/api/ingredients/:id", isAuthenticated, function(req, res) {
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

  //   adds ingredient to database
  app.post("/api/ingredients", isAuthenticated, function(req, res) {
    db.ingredients.create(req.body).then(function(dbIngred){
      res.json(dbIngred);
    });
  });

  //   deletes single ingredeient
  app.delete("/api/ingredients/:id", isAuthenticated, function(req, res) {
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
