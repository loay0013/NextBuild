module.exports = (app) => {
  const pcComponent = require("../controllers/pcComponents.controller.js");
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",pcComponent.create);

  //Retrieve all Tutorials
  router.get("/", pcComponent.findAll);

// Retrieve all published Tutorials
  router.get("/published", pcComponent.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", pcComponent.findOne);

  // Update a Tutorial with id
  router.put("/:id", pcComponent.update);

  // Delete a Tutorial with id
  router.delete("/:id", pcComponent.delete);

  app.use("/api/pcComponent", router);
};
