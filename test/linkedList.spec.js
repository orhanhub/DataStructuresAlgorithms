var { Node, LinkedList } = require("../DataStructures/LinkedList/linkedList");

var assert = require("assert");
var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

describe("Linked List tests", function() {
  var linkedList;
  var linkedListInstantiator = LinkedList;
  beforeEach(function() {
    linkedList = new linkedListInstantiator();
  });

  it("expect an empty linked list to start", function() {
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
  });

  it("can add a single element", function() {
    var n1 = new Node(1);
    linkedList.insert(n1);
    expect(linkedList.head).to.equal(linkedList.tail);
  });

  it("can add multiple elements", function() {
    var n1 = new Node(1);
    var n2 = new Node(2);
    linkedList.insert(n1);
    linkedList.insert(n2);
    expect(linkedList.head.value).to.equal(1);
    expect(linkedList.tail.value).to.equal(2);
    expect(linkedList.tail.next).to.equal(null);
    expect(linkedList.head.next).to.equal(linkedList.tail);
  });

  it("can remove the head node", function() {
    var n1 = new Node(1);
    var n2 = new Node(2);
    var n3 = new Node(3);
    linkedList.insert(n1);
    linkedList.insert(n2);
    linkedList.insert(n3);
    linkedList.remove(1);
    expect(linkedList.head.value).to.equal(2);
  });

  it("can remove a node", function() {
    var n1 = new Node(1);
    var n2 = new Node(2);
    var n3 = new Node(3);
    linkedList.insert(n1);
    linkedList.insert(n2);
    linkedList.insert(n3);
    linkedList.remove(2);
    expect(linkedList.head.value).to.equal(1);
    expect(linkedList.tail.value).to.equal(3);
  });

  it("can remove the tail node", function() {
    var n1 = new Node(1);
    var n2 = new Node(2);
    var n3 = new Node(3);
    linkedList.insert(n1);
    linkedList.insert(n2);
    linkedList.insert(n3);
    linkedList.remove(3);
    expect(linkedList.tail.value).to.equal(2);
  });

  it("can remove the single node linked list", function() {
    var n1 = new Node(1);
    linkedList.insert(n1);
    linkedList.remove(1);
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
  });

  it("returns the linked list if no item found", function() {
    var n1 = new Node(1);
    linkedList.insert(n1);
    linkedList.remove(2);
    expect(linkedList.head.value).to.equal(1);
    expect(linkedList.head).to.equal(linkedList.tail);
  });
});
