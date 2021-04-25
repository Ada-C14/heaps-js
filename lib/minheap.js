class HeapNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class MinHeap {
  constructor() {
    this.store = [];
  }

  // This method adds a HeapNode instance to the heap
  // Time Complexity: ?
  // Space Complexity: ?
  add(key, value = key) {
    const node = new HeapNode(key, value);
    const len = this.store.length;
    this.store[len] = node;


    return this.heapUp(len);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    const len = this.store.length;
    if (len === 0) {
      return undefined;
    }
    this.swap(0, len - 1);
    const removed = this.store.pop();
    this.heapDown(0);
    
    return removed.value;
  }


  // Used for Testing
  toString() {
    if (!this.store.length) {
      return "[]";
    }

    const values = this.store.map(item => item.value);
    const output = `[${values.join(', ')}]`;
    return output;
  }

  // This method returns true if the heap is empty
  // Time complexity: ?
  // Space complexity: ?
  isEmpty() {
    throw new Error("Method not implemented yet...");
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: ?
  // Space complexity: ?
  heapUp(index) {
     // if the value (key) is greater than the value of the parent node, you are done (min heap)
    // if it's less than, swap with the parent node
   if (index === 0) {
     return;
   }

    const childNode = this.store[index];
    let parentIndex;
    if (index % 2 === 0) {
      parentIndex = (index - 2) / 2;
    } else {
      parentIndex = (index - 1) / 2;
    }

    const parentNode = this.store[parentIndex];

    if (childNode.key >= parentNode.key) {
      return;
    } else {
      this.swap(index, parentIndex);
      this.heapUp(parentIndex);
    }
    
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    const leftIndex = (2 * index) + 1;
    const len = this.store.length;
    const rightIndex = (2 * index) + 2;
    const leftNode = this.store[leftIndex];
    const rightNode = this.store[rightIndex];
    const parentNode = this.store[index];

    if (leftIndex >= len) {
      return;
    } else if (leftIndex === len - 1) {
      if (parentNode.key <= leftNode.key) {
        return;
      } else {
        this.swap(index, leftIndex);
        return;
      }
    }
    
    if (parentNode.key <= leftNode.key && parentNode.key <= rightNode.key) {
      return;
    } else if (leftNode.key < rightNode.key) {
      this.swap(index, leftIndex);
      this.heapDown(leftIndex);
    } else {
      this.swap(index, rightIndex);
      this.heapDown(rightIndex);
    }
  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {
  MinHeap
};
