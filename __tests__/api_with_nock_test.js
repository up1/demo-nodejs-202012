const request = require("supertest");
const nock = require("nock");
const app = require("../app");

test("First API Test", (done) => {
  // Mock server
  nock("https://jsonplaceholder.cypress.io")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/users/1")
    .reply(200, { id: 1, name: "mock name" });

  request(app).get("/users").expect("Content-Type", /json/).expect(
    200,
    {
      id: 1,
      name: "mock name",
    },
    done
  );
});
