// test/unit.test.js
const { expect } = require("chai");

describe("Basic Math", () => {
  it("should add two numbers correctly", () => {
    expect(2 + 2).to.equal(4);
  });

  it("should check if a string contains a word", () => {
    const str = "Hello World";
    expect(str).to.include("World");
  });
});