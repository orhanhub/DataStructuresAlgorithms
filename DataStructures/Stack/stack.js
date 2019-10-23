class Stack {
  constructor() {
    this.memory = [];
  }
  /**
   * @return {*}
   */
  size() {
    //return the # of items in the stack;
    return this.memory.length;
  }

  /**
   * @param {*} value
   */
  push(input) {
    this.memory.push(input);
  }

  /**
   * @return {*} value
   */
  pop() {
    // remove the last inserted value from the stack;
    return this.memory.pop();
  }

  /**
   * @return {*} value
   */
  peek() {
    // print the latest value on the stack
    let top = this.size() - 1;
    return this.memory[top];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    let length = this.size();
    return length === 0 ? true : false;
  }
}

exports.Stack = Stack;
