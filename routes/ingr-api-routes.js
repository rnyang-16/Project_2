var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/api/ingredients", isAuthenticated, function(req, res) {
    db.Ingredients.findAll({}).then(function(dbIngred) {
      res.json(dbIngred);
    });
  });

  //   returns single ingredient
  app.get("/api/ingredients/:id", isAuthenticated, function(req, res) {
    db.Ingredients.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbIngred) {
      res.json(dbIngred);
    });
  });

  //   update single ingredient selected or not
  app.put("/api/ingredients/:id", isAuthenticated, function(req, res) {
    db.Ingredients.update(
      {
        select: req.body.select
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbIngred) {
      res.json(dbIngred);
    });
  });

  //   updates ingredient to database
  app.post("/api/ingredients", isAuthenticated, function(req, res) {
    db.Ingredients.create(req.body).then(function(dbIngred) {
      res.json(dbIngred);
    });
  });

  //   deletes single ingredeient
  app.delete("/api/ingredients/:id", isAuthenticated, function(req, res) {
    db.Ingredients.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbIngred) {
      res.json(dbIngred);
    });
  });
};
