const { MinHeap } = require("./minheap");

// This method uses a heap to sort an array.
// Time Complexity:  O(nlogn)?
// Space Complexity: O(n)?

function heapsort(list) {
  let heap = new MinHeap();
  let sortedArray = [];

  list.forEach(key => {
    heap.add(key, key);
  })

  for (let i=0; i < list.length; i++) {
    sortedArray.push(heap.remove())
    console.log("Sorted", sortedArray)
  }
  return sortedArray;
};

module.exports = heapsort;
