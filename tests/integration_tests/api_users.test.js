const app = require("../../app");
const request = require("supertest");

describe("routes/users", () => {
  it("POST /users should create a new user", async () => {
    const user = {
      firstName: "hello",
      lastName: "kitty",
      age: 5,
      email: "hello@kitty.com"
    };

    let response = await request(app)
      .post("/users")
      .set("Accept", "application/json")
      .send(user);

    expect(response.status).toEqual(200);
    expect(response.body.user[0].firstName).toEqual(user.firstName);
    expect(response.body.user[0].lastName).toEqual(user.lastName);
    expect(response.body.user[0].age).toEqual(user.age);
  });
});
