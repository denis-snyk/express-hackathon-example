import * as request from "supertest";
import { app } from "./app";

describe("GET / endpoint", () => {
  it("should say hello", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  });

  it("should return message with the user name", async () => {
    const name = "testValue";
    const response = await request(app).get(`/?name=${name}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Hello ${name}`);
  });
});

describe("DELETE /user/:id endpoint", () => {
  it("should delete user and return confirmation", async () => {
    const userId = "12345";
    const response = await request(app).del(`/user/${userId}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`DELETE /user/${userId}`);
  });
});

describe("POST /user endpoint", () => {
  it("should search user and redirect back", async () => {
    const response = await request(app)
      .post("/user")
      .send({ id: "123", query: "testQuery" });
    expect(response.status).toBe(302);
    expect(response.headers.location).toBe("/");
  });
});

describe("POST /async-user-creation endpoint", () => {
  it("should respond with JSON and status 202", async () => {
    const response = await request(app)
      .post("/async-user-creation")
      .send({ username: "newUser" });

    expect(response.status).toBe(301);
  });
});
