const express = require("express");
const userService = require("./userService");
const router = express.Router();

router.get("/users", async (req, res) => {
  userService
    .inquiryUser()
    .then((result) => {
      if (!result) {
        res.status(404).send({ error: "User not found" });
        return;
      }
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
});

module.exports = router;
