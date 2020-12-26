const request = require("supertest");
const app = require("../app");

test("First API Test", (done) => {
  request(app).get("/users").expect("Content-Type", /json/).expect(
    200,
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    done
  );
});
