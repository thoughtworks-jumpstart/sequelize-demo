const app = require("../../app");
const request = require("supertest");
let user;

describe("routes/users", () => {
  beforeEach(() => {
    const randomLongFloat = Math.random();
    user = {
      firstName: "some first name",
      lastName: "some other name",
      age: 5,
      email: `${randomLongFloat}@email.com`
    };
  });
  it("POST /users should create a new user", async () => {
    response = await request(app)
      .post("/users")
      .set("Accept", "application/json")
      .send(user);

    expect(response.status).toEqual(200);
    expect(response.body.user.firstName).toEqual(user.firstName);
    expect(response.body.user.lastName).toEqual(user.lastName);
    expect(response.body.user.age).toEqual(user.age);
  });

  it("PUT /users/:id should update user details", async () => {
    response = await request(app)
      .post("/users")
      .set("Accept", "application/json")
      .send(user);

    const testUserId = response.body.user.id;

    updatedUser = {
      firstName: "another first name",
      lastName: "another last name"
    };

    response = await request(app)
      .put(`/users/${testUserId}`)
      .set("Accept", "application/json")
      .send(updatedUser);

    expect(response.status).toEqual(200);
    expect(response.body.user.firstName).toEqual(updatedUser.firstName);
    expect(response.body.user.lastName).toEqual(updatedUser.lastName);
  });

  it("GET /users should return a list of users", async () => {
    response = await request(app)
      .get("/users")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.body.users.length).toBeGreaterThanOrEqual(1);
    expect(response.body.users[0].firstName).toBeTruthy();
    expect(response.body.users[0].lastName).toBeTruthy();
  });
});
