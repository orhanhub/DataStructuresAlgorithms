var { Stack } = require("../DataStructures/Stack/stack.js");

var assert = require("assert");
var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

describe("Stack tests", function() {
  var stack;
  var instantiator = Stack;
  beforeEach(function() {
    stack = new instantiator();
  });

  it("expect an empty stack to start", function() {
    assert.equal(stack.size(), 0);
  });

  it("can add a single item to the stack", function() {
    stack.push(0);
    expect(stack.memory).to.deep.equal([0]);
  });

  it("can add multiple items to the stack", function() {
    stack.push("a");
    stack.push("b");
    expect(stack.memory).to.deep.equal(["a", "b"]);
  });

  it("can add the item to the end", function() {
    stack.push("a");
    stack.push("c");
    stack.push("b");
    expect(stack.peek()).to.equal("b");
  });

  it("can remove the last item from the stack", function() {
    stack.push("a");
    stack.push("c");
    stack.push("b");
    stack.pop();
    expect(stack.memory).to.deep.equal(["a", "c"]);
  });

  it("can confirm if the stack is empty", function() {
    expect(stack.isEmpty()).to.equal(true);
  });

  it("can confirm when the stack is not empty", function() {
    stack.push("a");
    expect(stack.isEmpty()).to.equal(false);
  });
});
