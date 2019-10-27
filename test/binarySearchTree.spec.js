var {
  Node,
  BinarySearchTree
} = require("../DataStructures/BinarySearchTree/binarySearchTree");

var assert = require("assert");
var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

describe("Binary Search Tree tests", function() {
  var bst;
  var bstInstantiator = BinarySearchTree;
  beforeEach(function() {
    bst = new bstInstantiator();
  });

  it("expect an empty binary search tree to start", function() {
    expect(bst.root).to.equal(null);
  });

  it("can insert a node to the root", function() {
    var n10 = new Node(10);
    bst.insert(n10);
    expect(bst.root.value).to.equal(10);
  });

  it("can insert smaller value to the left of the root", function() {
    var n10 = new Node(10);
    var n5 = new Node(5);
    bst.insert(n10);
    bst.insert(n5);
    expect(bst.root.value).to.equal(10);
    expect(bst.root.left.value).to.equal(5);
  });

  it("can insert bigger value to the right of the root", function() {
    var n10 = new Node(10);
    var n20 = new Node(20);
    bst.insert(n10);
    bst.insert(n20);
    expect(bst.root.value).to.equal(10);
    expect(bst.root.right.value).to.equal(20);
  });

  it("can insert smaller value to the left of the root", function() {
    var n10 = new Node(10);
    var n5 = new Node(5);
    bst.insert(n10);
    bst.insert(n5);
    expect(bst.root.value).to.equal(10);
    expect(bst.root.left.value).to.equal(5);
  });
});
