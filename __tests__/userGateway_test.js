const nock = require("nock");
const userGateway = require("../userGateway");

test("should error Code=500", async () => {
  // Mock server
  nock("https://jsonplaceholder.cypress.io")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/users/1")
    .reply(500);

  // Verify
  const response = await userGateway.getData();
  expect(response.code).toEqual(500);
});
