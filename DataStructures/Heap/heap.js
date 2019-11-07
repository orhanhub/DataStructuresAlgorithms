class MinHeap {
  constructor() {
    this.result = [];
  }

  //Helper functions
  // Most of the helper functions are self explanatory
  leftChildIndex(i) {
    return (this.leftChild = 2 * i + 1);
  }

  hasLeftChild(i) {
    let ChildIndexLeft = this.leftChildIndex(i);
    return this.result[ChildIndexLeft] !== undefined;
  }

  leftChildValue(i) {
    if (this.hasLeftChild(i)) {
      let index = this.leftChildIndex(i);
      return this.result[index];
    }
  }

  rightChildIndex(i) {
    return (this.rightChild = 2 * i + 2);
  }

  hasRightChild(i) {
    let ChildIndexRight = this.rightChildIndex(i);
    return this.result[ChildIndexRight] !== undefined;
  }

  rightChildValue(i) {
    if (this.hasRightChild(i)) {
      let index = this.rightChildIndex(i);
      return this.result[index];
    }
    return null;
  }

  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  hasParent(i) {
    return Math.floor((i - 1) / 2) >= 0;
  }

  parentItem(i) {
    if (this.hasParent(i)) {
      let parentIndex = this.parentIndex(i);
      return this.result[parentIndex];
    }
  }

  lastItemIndex() {
    return this.result.length - 1;
  }

  swap(arrInput, a, b) {
    [arrInput[a], arrInput[b]] = [arrInput[b], arrInput[a]];
  }

  peek() {
    return this.result[0];
  }
  //end of helper functions

  //Remove the minimum item from the heap;
  poll() {
    //given the minHeap; the minimum value is on top;
    //set the item to the value on top;
    let item = this.peek();
    //set the last item index value
    let lastItemIndex = this.lastItemIndex();
    //swap the first item and the last item value;
    this.result[0] = this.result[lastItemIndex];
    //remove the last item;
    this.result.pop();
    //balance the heap again by bubbling down;
    this.heapifyDown();
    //return the minimum item set at first;
    return item;
  }

  //Move the max value down to the bottom;
  //used at poll function;

  heapifyDown() {
    let index = 0;
    //push the value down the heap towards left;
    while (this.hasLeftChild(index)) {
      //assume that there is a child value that is smaller;
      //set the smaller child index location on the array as the left item on the heap;
      let smallerChildIndex = this.leftChildIndex(index);
      //but adjust the smaller child index location if the right item is smaller than the left item on the heap
      if (
        this.hasRightChild(index) &&
        this.rightChildValue(index) < this.leftChildValue(index)
      ) {
        smallerChildIndex = this.rightChildIndex(index);
      }
      //if the heap is balanced, i.e. current value is smaller than the child; just stop the function;
      if (this.result[index] < this.result[smallerChildIndex]) {
        return;
      }
      //otherwise, swap the values
      else {
        this.swap(this.result, index, smallerChildIndex);
      }
      //and reset the head to the child, so that while clause can check again recursively
      index = smallerChildIndex;
    }
  }

  //Add an item to the heap;
  //first add the item to the end
  //then call bubble the value up along the tree as necessary
  add(item) {
    this.result.push(item);
    this.heapifyUp();
  }

  //heapifyUp bubbles up the value as necessary
  //used at add(item) function;

  heapifyUp() {
    //assing the last added item's index position
    let index = this.lastItemIndex();
    //as long as there is a parent and
    //as long as parent value is greater than current value
    //swap the two values in the array
    while (
      this.hasParent(index) &&
      this.parentItem(index) > this.result[index]
    ) {
      this.swap(this.result, this.parentIndex(index), index);
      //and reset the index position
      index = this.parentIndex(index);
    }
  }
}

// var heap = new MinHeap();
// heap.add(30);
// heap.add(10);
// heap.add(15);
// heap.add(20);
// heap.add(17);
// heap.add(25);
// heap.add(8);
// heap.add(19);
// heap.swap(heap.result, 0, 2);
// console.log(heap.poll());
// console.log(heap.poll());
// console.log(heap.poll());
// console.log(heap.poll());
// console.log(heap.poll());
// console.log(heap);

exports.MinHeap = MinHeap;
