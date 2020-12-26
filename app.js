const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.send({ message: "Hello" });
});

module.exports = app;
