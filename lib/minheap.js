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
  // Time Complexity: O(log n). Pushing the new value to array is O(1),
  // then it calls heapUp which is O(log n).
  // Space Complexity: O(log n). The space for actually adding is O(1),
  // but it calls heapUp which is O(log n).
  add(key, value = key) {
    this.store.push(new HeapNode(key, value));
    this.heapUp(this.store.length - 1);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n). The swap and pop are both O(1),
  // then it calls heapDown which is O(log n).
  // Space Complexity: O(log n). The space for removing is O(1),
  // but it calls heapDown which is O(log n).
  remove() {
    if (this.isEmpty()) return;

    this.swap(0, this.store.length - 1);
    const removedNode = this.store.pop();
    this.heapDown(0);
    
    return removedNode.value;
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
  // Time complexity: O(1), just checks array length.
  // Space complexity: O(1), doesn't need any additional data structures.
  isEmpty() {
    return this.store.length === 0;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log n). The calculation, swap, and comparison
  // are all constant, but the function will need to be called as 
  // many times as there are levels in the heap, which scales
  // logarithmically with the heap's size.
  // Space complexity: O(log n). Since it is a recursive function
  // it will have at worst as many function calls on the stack
  // as times it will be called, which is controlled by number of levels
  // in the heap and scales logarithmically with size.
  heapUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)

    if (index === 0) return;
    if (this.store[parentIndex].key < this.store[index].key) return;

    this.swap(index, parentIndex);
    this.heapUp(parentIndex);
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    const leftChild = index * 2 + 1;
    const rightChild = index * 2 + 2;

    if (this.store.length <= leftChild) return;
    if (this.store[index].key < this.store[leftChild].key && this.store[index].key < this.store[leftChild].key) return;

    const smallerChild = this.store[leftChild].key < this.store[rightChild].key ? leftChild : rightChild;
    this.swap(index, smallerChild);
    this.heapDown(smallerChild);
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
