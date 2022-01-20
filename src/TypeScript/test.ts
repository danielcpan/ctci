import { MinHeap, MaxHeap } from "../DataStructures/Heap";

const items = [6, 4, 5, 7, 2, 1];

const minHeap = new MinHeap(items);
// const minHeap = new MinHeap<number>([]);
// items.forEach((el: number) => {
//   minHeap.add(el);
// });
// console.log("items:", items);
console.log("minHeap:", minHeap);
// console.log(minHeap.pop());
console.log("sorted:", minHeap.sort());
console.log(minHeap.pop());
// console.log("minHeap:", minHeap.nodes);

// const minHeap2 = new MinHeap2(items);

// console.log("minHeap2:", minHeap2);
// console.log("sorted2:", minHeap2.sort());
// console.log(minHeap2.extractRoot());

// const maxHeap = new MaxHeap(items);

// console.log("maxHeap:", maxHeap.nodes);
// console.log("sorted:", maxHeap.sort());
