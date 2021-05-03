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
    let node = new HeapNode(key, value);

    this.store.push(node);

    this.heapUp(this.store.length-1);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    if (this.isEmpty()) return;

    this.swap(0, this.store.length - 1);
    let removed = this.store.pop();

    // heapDown(0) unless this.store is empty
    if (!this.isEmpty()) {
      this.heapDown(0);
    }
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
    let parent = Math.floor((index - 1) / 2);

    if (index === 0 || this.store[index].key > this.store[parent].key) {
      return;
    }

    this.swap(index, parent);
    this.heapUp(parent);
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    let leftChild = index * 2 + 1;
    let rightChild = index * 2 + 2;
    let smallestChild;
    
    if (this.store[index].key < this.store[leftChild].key && this.store[index].key < this.store[rightChild].key) 
      return;
      // check if current is less than children
    if (this.store[index].key > this.store[leftChild].key && this.store[leftChild].key < this.store[rightChild].key) {
      // if key in left child is less than root, swap
      smallestChild = leftChild;
      this.swap(index, smallestChild);
      // if not, swap with right
    } else {
      smallestChild = rightChild;
      this.swap(index, smallestChild);
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
