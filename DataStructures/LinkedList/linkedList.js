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
  /**
   * Remove a node from the Linked List
   * @param {*} input
   * @return {LinkedList}
   */
  remove(input, node) {
    //if node is not defined, start from the head;
    node = node || this.head;

    //Case: item to remove is the head
    if (this.head.value === input) {
      //Case: item to remove is also the tail,
      // i.e. the linked list has single node;
      if (this.tail.value === input) {
        //then set the linked list is null
        this.head = null;
        this.tail = null;
        return this;
      }
      // otherwise just move the head pointer to next node
      this.head = this.head.next;
      return this;
    }

    //Case: no item to remove
    //if current item is the tail and no item found, just stop;
    if (node.next === null) {
      return this;
    }

    //Case: Move along the Link List to remove the item
    //if current node's next item is the target to remove
    //move the pointer to the subsequent item
    if (node.next.value === input) {
      //if the next item is the tail, first adjust the tail pointer
      if (node.next.value === this.tail.value) {
        this.tail = node;
      }
      //then move the pointer to the subsequent item
      node.next = node.next.next;
    }

    //otherwise, call the remove function recursively
    else {
      return this.remove(input, node.next);
    }
    return this;
  }
}

exports.LinkedList = LinkedList;
exports.Node = Node;
