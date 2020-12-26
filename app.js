const express = require("express");
const app = express();

const userGateway = require("./userGateway");

app.get("/users", (req, res) => {
  userGateway.getData().then((response) => {
    res.send(response);
  });
});

app.get("/users/1", async (req, res) => {
  const response = await userGateway.getUser();
  res.send(response);
});

module.exports = app;
