const request = require("supertest");
const app = require("../app");

test("First API Test", (done) => {
  request(app)
    .get("/users")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      done();
    });
});
