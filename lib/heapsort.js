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

  for (let i = 0; i < len; i++) {
    list[i] = heap.remove();
  }

  return list;
};

module.exports = heapsort;
