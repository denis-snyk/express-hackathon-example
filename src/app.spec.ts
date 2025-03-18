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
