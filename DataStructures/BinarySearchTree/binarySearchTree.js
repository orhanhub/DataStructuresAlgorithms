/**
 * The module for Binary Search Tree
 * @module Binary Search Tree Module
 */

/**
 * @class Node class for binary search tree
 */
class Node {
  /**
   *
   * @param {*} value any value
   * @param {*} left default null
   * @param {*} right default null
   */
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * @class Binary Search Tree class
 * @returns {object} A new Binary Search tree object
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  /**
   *
   * @param {*} input must be Node instantiated object
   * @param {*} position default is the object.root
   */
  insert(input, position) {
    //set the position to this.root if not given;
    position = position || this.root;
    //if the root is blank, insert the node to the root;
    if (this.root === null) {
      return (this.root = input);
    }
    //if the root is not blank, follow the procedure below
    //if the value is less than the current position, store left
    // until the left position is blank
    while (input.value < position.value) {
      if (position.left === null) {
        return (position.left = input);
      } else {
        return this.insert(input, position.left);
      }
    }
    //if the value is greater than the current position, store right
    // until the right position is blank
    while (input.value > position.value) {
      if (position.right === null) {
        return (position.right = input);
      } else {
        return this.insert(input, position.right);
      }
    }
  }
  //TODO: to be implemented
  remove(input) {}
  //TODO: to be implemented
  find(input) {}

  /**
   * @return {Array} Sorted array of the tree in ascending order
   */
  inOrderTraversal() {
    //Create a result array, which will be printed;
    let result = [];
    //Recursive function, reflecting the traverse order;
    function LeftNodeRight(node) {
      if (node) {
        LeftNodeRight(node.left);
        result.push(node.value);
        LeftNodeRight(node.right);
      }
    }
    LeftNodeRight(this.root);
    return result;
  }
}

exports.Node = Node;
exports.BinarySearchTree = BinarySearchTree;
