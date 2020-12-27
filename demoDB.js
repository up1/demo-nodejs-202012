const db = require("./db");
const createUserModel = require("./userModel");
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    db.close();
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const user = createUserModel(db);
user
  .create({
    name: "somkiat",
    age: 30,
  })
  .then((result) => {
    console.log(result);
  })
  .finally(() => {
    db.close();
  });

user
  .findAll()
  .then((users) => {
    console.log("All users:", JSON.stringify(users, null, 4));
  })
  .finally(() => {
    db.close();
  });
