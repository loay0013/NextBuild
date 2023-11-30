require("dotenv").config({ path: `.env.local`, override: true });
const Sequelize = require("sequelize");
const sequelize = new Sequelize("nx", "root", "Rasubeli8", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  password: process.env.SECRET,
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.nx = require("./pcComponent.model.js")(sequelize, Sequelize);


module.exports = db;
