class Heap {
  items: number[];

  constructor(items: number[]) {
    this.items = items;
    this.buildHeap();
  }

  parentIdx(idx: number): number {
    return Math.ceil(idx / 2) - 1;
  }

  leftIdx(idx: number): number {
    return idx * 2 + 1;
  }

  rightIdx(idx: number): number {
    return idx * 2 + 2;
  }

  // swap(a: number, b: number): void {
  //     [this.items[a], this.items[b]] = [this.items[b], this.items[a]]
  // }

  swap(idx1: number, idx2: number): void {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  heapifyDown(idx: number): void {
    let cur = idx;
    const hasLeft = this.leftIdx(cur) < this.items.length;

    while (hasLeft) {
      console.log("curIdx:", cur, "this.items[cur]:", this.items[cur], "this.items:", this.items);
      const right = this.items[this.rightIdx(cur)];
      const left = this.items[this.leftIdx(cur)];
      const hasRight = this.rightIdx(cur) < this.items.length;
      const smallerIdx = hasRight && right < left ? this.rightIdx(cur) : this.leftIdx(cur);

      if (this.items[cur] < this.items[smallerIdx]) break;
      console.log("curIdx:", cur, "smallerIdx:", smallerIdx);
      this.swap(cur, smallerIdx);
      console.log("this.items:", this.items);
      cur = smallerIdx;
    }
  }

  heapifyUp(idx: number): void {
    let cur = idx;
    let parentIdx = this.parentIdx(cur);

    while (parentIdx >= 0 && this.items[cur] < this.items[parentIdx]) {
      console.log("heapify up:");
      this.swap(cur, parentIdx);
      cur = parentIdx;
      parentIdx = this.parentIdx(cur);
    }
  }

  add(el: number): void {
    this.items.push(el);
    this.heapifyUp(this.items.length - 1);
  }

  buildHeap(): void {
    console.log("this.items:", this.items);
    for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
      console.log("i:", i);
      this.heapifyDown(i);
    }
  }

  pop() {
    if (this.items.length < 1) throw Error("Heap is empty");

    const elToPop = this.items[0];
    this.items[0] = this.items.pop()!;
    this.heapifyDown(0);

    return elToPop;
  }
}

// class KthLargest {
//   minHeap: Heap;

//   constructor(k: number, nums: number[]) {
//       this.minHeap = new Heap(nums)

//       // for (let i = 0; i < nums.length - k; i++) {
//       //     this.minHeap.pop();
//       // }
//   }

//   add(val: number): number {
//       return 1
// //         if (val < this.minHeap.items[0]) return this.minHeap.items[0]
// //         this.minHeap.add(val);
// //         this.minHeap.pop();

// //         return this.minHeap.items[0];
//   }
// }

console.log(new Heap([4, 5, 8, 2]));

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// [4,5,8,2]
// [8,5,4,2]
// [8,5,4,3,2] => 4
// [8,5,5,4,3,2] => 5
// [10,8,5,5,4,3,2] => 5
// [10,9,8,5,5,4,3,2] => 8
// [10,9,8,5,5,4,4,3,2] => 8

// [4,5,8,2]
// [4,5,8]
// [4,5,8] => 4
// [5,5,8] => 5
// [5,8,10] => 5
// [8,9,10] => 8
// [8,9,10] => 8

// [10,8,5]

// [2,3,4,4,5,5,8,9,10]

// [2,3,4,9,10]
