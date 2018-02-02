const app = require("../../app");
const request = require("supertest");

describe("routes/index", () => {
  it("/ should return hello world", done => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { message: "hello world" }, done);
  });
});
