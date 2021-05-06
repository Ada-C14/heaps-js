const { MinHeap } = require('./minheap')

// This method uses a heap to sort an array.
// Time Complexity: O(n log n). The while loops both run for
// every element in list, so on their own have O(n). Within them
// they call either heap.add or heap.remove, which has O(log n)
// time complexity.
// Space Complexity: O(n). The function does make a new data structure.

function heapsort(list) {
  const heap = new MinHeap;

  while(list.length) {
    heap.add(list.pop());
  }

  while(!heap.isEmpty()) {
    list.push(heap.remove());
  }  

  return list;
};

module.exports = heapsort;
