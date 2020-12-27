const Sequelize = require("sequelize");

const db = new Sequelize("product_db", "user", "pass", {
  host: "128.199.212.251",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
