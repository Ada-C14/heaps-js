const { MinHeap } = require('./minheap')

// This method uses a heap to sort an array.
// Time Complexity: O(n log n). The while loops both run for
// every element in list, so on their own have O(n). Within them
// they call either heap.add or heap.remove, which has O(log n)
// time complexity.
// Space Complexity: O(1). The function does make a new data structure --
// a heap -- but it only adds to the heap one element for every element it
// pops off of the list, so the list is taking less space as the heap takes
// more. Then, the process is reversed with the heap taking less space
// so the list can be rebuilt and take more space. Increasing the size of
// the list is not going to change the additional amount of space the function uses.

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
