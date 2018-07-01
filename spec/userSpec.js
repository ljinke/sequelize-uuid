const db = require("../models");
const uuid = require("uuid");

describe("User", () => {
  it("nothing", async () => {
    await db.User.create({
      id: uuid(),
      name: "abc",
      last_access: "127.0,0.1"
    });
    await db.User.findAll();
  });
});
