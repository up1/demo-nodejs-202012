const userService = require("../userService");
const userGateway = require("../userGateway");

test("should return stub user", async () => {
  // Stub
  jest
    .spyOn(userGateway, "getData")
    .mockResolvedValue({ id: 1, name: "stub user" });

  const results = await userService.inquiryUser();
  expect(results.id).toBe(1);
  expect(results.name).toBe("stub user");
});

test("should return error", async () => {
  // Stub
  jest.spyOn(userGateway, "getData").mockRejectedValue({ code: 500 });

  await expect(userService.inquiryUser()).rejects.toEqual({
    code: 500,
  });
});
