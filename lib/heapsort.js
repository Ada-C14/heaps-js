const { MinHeap } = require('./minheap');

// This method uses a heap to sort an array.
// Time Complexity:  O(nlog(n))- both for loops are O(n), heap.add and heap.remove are O(log(n))
// Space Complexity: O(n) - the store array of minHeap has a space complexity of O(n)
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
