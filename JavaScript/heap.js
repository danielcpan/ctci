class Heap {
  constructor(items, compare = (a, b) => a - b) {
    this.items = items;
    this.compare = compare;
    this.buildHeap();
  }

  parentIdx(idx) {
    return Math.ceil(idx / 2) - 1;
  }

  leftIdx(idx) {
    return idx * 2 + 1;
  }

  rightIdx(idx) {
    return idx * 2 + 2;
  }

  hasLeft(idx) {
    return this.items[this.leftIdx(idx)] !== undefined;
  }

  hasRight(idx) {
    return this.items[this.rightIdx(idx)] !== undefined;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  pop() {
    const elToPop = this.items[0];
    const last = this.items.pop();
    this.items[0] = last;
    this.heapifyDown(0);
    return elToPop;
  }

  heapifyDown(idx) {
    let curIdx = idx;

    while (this.hasLeft(curIdx)) {
      const right = this.items[this.rightIdx(curIdx)];
      const left = this.items[this.leftIdx(curIdx)];
      const largerIdx =
        this.hasRight(curIdx) && this.compare(left, right) > 0
          ? this.rightIdx(curIdx)
          : this.leftIdx(curIdx);

      if (this.compare(this.items[largerIdx], this.items[curIdx]) > 0) break;

      this.swap(curIdx, largerIdx);
      curIdx = largerIdx;
    }
  }

  heapifyUp(idx) {
    let cur = idx;
    let parentIdx = this.parentIdx(cur);

    while (parentIdx >= 0 && this.items[cur] < this.items[parentIdx]) {
      this.swap(cur, parentIdx);
      cur = parentIdx;
      parentIdx = this.parentIdx(cur);
    }
  }

  add(el) {
    this.items.push(el);
    this.heapifyUp(this.items.length - 1);
  }

  buildHeap() {
    for (let i = Math.floor(this.items.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
}
