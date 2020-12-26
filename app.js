const express = require("express");
const app = express();

const userService = require("./userService");

app.get("/users", (req, res) => {
  userService.inquiryUser().then((response) => {
    res.send(response);
  });
});

app.get("/users/1", async (req, res) => {
  const response = await userService.inquiryUser();
  res.send(response);
});

module.exports = app;
