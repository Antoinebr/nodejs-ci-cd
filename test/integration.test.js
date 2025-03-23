// test/integration.test.js
const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");

describe("Integration Tests", () => {
  it("GET / should return Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello World!");
  });

  it("GET /api should return JSON response", async () => {
    const res = await request(app).get("/api");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ message: "API is working" });
  });
});