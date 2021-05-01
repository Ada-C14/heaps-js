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
  // Time Complexity: O(log(n)) - Recursive calls (uses heapUp)
  // Space Complexity: O(log(n)) - Recursive calls, log(n) calls in memory (because of heapUp)
  add(key, value = key) {
    const node = new HeapNode(key, value);
    const len = this.store.length;
    this.store[len] = node;

    return this.heapUp(len);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log(n)), recursive (uses heapDown, similar to heapUp)
  // Space Complexity: O(log(n)), log(n) recursion calls (uses heapDown)
  remove() {
    const len = this.store.length;
    if (this.isEmpty()) {
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
  // Time complexity: O(1) - the length property is a quick look up 
  // Space complexity: O(1) - saving the length of the array will be constant memory
  isEmpty() {
    const len = this.store.length;
    if (len === 0) {
      return true;
    }
    return false;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log(n)), index is divided by two each time this method is called (n-2)/(2^t) = c (where t is the number of times the method is called and c is a constant (the parent index)). To solve for the number of times this is called, we can simplify this to n = 2^t. Solving for t: t = log2(n).
  // Space complexity: O(log(n)), the space complexity here depends on the number of recursion steps, which will be log(n) steps.
  heapUp(index) {

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
