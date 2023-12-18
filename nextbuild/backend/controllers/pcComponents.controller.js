const db = require("../models");
const PcComponent = db.nx;
const Op = db.Sequelize.Op;

// Create and Save a new PcComponent
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ComponentName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a PcComponent
  const pcComponent = {
    ComponentName: req.body.ComponentName,
    typeId: req.body.typeId,
    price: req.body.price,
    ram_capacity:req.body.ram_capacity,
    storage_capacity:req.body.storage_capacity,
    category:req.body.category,
    processorName:req.body.processorName,
    published: req.body.published ? req.body.published : false
  };

  // Save PcComponent in the database
  PcComponent.create(pcComponent)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the PcComponent."
      });
    });
};

// Retrieve all PcComponents from the database.
exports.findAll = (req, res) => {
  const ComponentName = req.query.ComponentName;
  const condition = ComponentName ? { ComponentName: { [Op.like]: `%${ComponentName}%` } } : null;

  PcComponent.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving PcComponents."
      });
    });
};

// Find a single PcComponent with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  PcComponent.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving PcComponent with id=" + id
      });
    });
};

// Update a PcComponent by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  PcComponent.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "PcComponent was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update PcComponent with id=${id}. Maybe PcComponent was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating PcComponent with id=" + id
      });
    });
};

// Delete a PcComponent with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  PcComponent.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "PcComponent was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete PcComponent with id=${id}. Maybe PcComponent was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete PcComponent with id=" + id
      });
    });
};

// Delete all PcComponents from the database.
exports.deleteAll = (req, res) => {
  PcComponent.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} PcComponents were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all PcComponents."
      });
    });
};

// Find all published PcComponents
exports.findAllPublished = (req, res) => {
  PcComponent.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving published PcComponents."
      });
    });
};
