/**
 * A module for Linked List
 * @module Linked List Module
 */

/**
 * @classdesc Node class
 */
class Node {
  /**
   * @param {*} value the value to be added
   * @param {*} next the pointer to the next object
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
/**
 * @class Linked List class
 * @returns {object} A new Linked List object with head and tail properties
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   * Insert a node to the Linked List
   * Node must be instantiated by Node class
   * @param {*} input
   * @return {LinkedList}
   */
  insert(input) {
    //if linked list is empty, add item to the head of the linked list
    if (this.head === null) {
      this.head = this.tail = input;
    } else {
      //otherwise add the item to the tail
      this.tail.next = input;
      this.tail = input;
    }
    return this;
  }
}

exports.LinkedList = LinkedList;
exports.Node = Node;
