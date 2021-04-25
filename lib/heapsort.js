const { MinHeap } = require('./minheap');

// This method uses a heap to sort an array.
// Time Complexity:  ?
// Space Complexity: ?
function heapsort(list) {
  let heap = new MinHeap();
  const len = list.length;
  for (let i = 0; i < len; i++) {
    heap.add(list[i]);
  }

  const result = [];

  for (let i = 0; i < len; i++) {
    result.push(heap.remove());
  }

  return result;
};

module.exports = heapsort;
