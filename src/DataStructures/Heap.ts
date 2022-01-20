export const MIN_COMPARATOR = <T>(a: T, b: T): number => (a as any) - (b as any);
export const MAX_COMPARATOR = <T>(a: T, b: T): number => (b as any) - (a as any);

type ComparatorFn<T> = (a: T, b: T) => number;

export class Heap<T> {
  nodes: T[];
  compare: ComparatorFn<T>;

  constructor(nodes: T[] = [], compare?: ComparatorFn<T>) {
    this.nodes = [...nodes];
    this.compare = compare === undefined ? this.comparator : compare;
    this.buildHeap();
  }

  comparator(a: T, b: T): number {
    return MIN_COMPARATOR(a, b);
  }

  private parentIdx(idx: number): number {
    return Math.ceil(idx / 2) - 1;
  }

  private leftIdx(idx: number): number {
    return idx * 2 + 1;
  }

  private rightIdx(idx: number): number {
    return idx * 2 + 2;
  }

  private hasLeft(idx: number): boolean {
    return this.nodes[this.leftIdx(idx)] !== undefined;
  }

  private hasRight(idx: number): boolean {
    return this.nodes[this.rightIdx(idx)] !== undefined;
  }

  private shouldSwap(a: T, b: T): boolean {
    return this.compare(a, b) > 0;
  }

  private swap(aIdx: number, bIdx: number) {
    [this.nodes[aIdx], this.nodes[bIdx]] = [this.nodes[bIdx], this.nodes[aIdx]];
  }

  private heapifyDown(idx: number) {
    let curIdx = idx;

    while (this.hasLeft(curIdx)) {
      const left = this.nodes[this.leftIdx(curIdx)];
      const right = this.nodes[this.rightIdx(curIdx)];
      const idxToCompare =
        this.hasRight(curIdx) && this.shouldSwap(left, right)
          ? this.rightIdx(curIdx)
          : this.leftIdx(curIdx);

      if (!this.shouldSwap(this.nodes[curIdx], this.nodes[idxToCompare])) break;

      this.swap(curIdx, idxToCompare);
      curIdx = idxToCompare;
    }
  }

  private heapifyDownUntil(idx: number) {
    let curIdx = 0;

    while (this.leftIdx(curIdx) < idx) {
      const left = this.nodes[this.leftIdx(curIdx)];
      const right = this.nodes[this.rightIdx(curIdx)];
      const idxToCompare =
        this.hasRight(curIdx) && this.rightIdx(curIdx) < idx && this.shouldSwap(left, right)
          ? this.rightIdx(curIdx)
          : this.leftIdx(curIdx);

      if (this.shouldSwap(this.nodes[curIdx], this.nodes[idxToCompare])) {
        this.swap(curIdx, idxToCompare);
      }

      curIdx = idxToCompare;
    }
  }

  private heapifyUp(idx: number) {
    let cur = idx;
    let parentIdx = this.parentIdx(cur);

    while (parentIdx >= 0 && this.shouldSwap(this.nodes[parentIdx], this.nodes[cur])) {
      this.swap(cur, parentIdx);
      cur = parentIdx;
      parentIdx = this.parentIdx(cur);
    }
  }

  private buildHeap() {
    for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  sort() {
    for (let i = this.size() - 1; i > 0; i--) {
      this.swap(0, i);
      this.heapifyDownUntil(i);
    }

    return this.nodes.reverse();
  }

  add(el: T) {
    this.nodes.push(el);
    this.heapifyUp(this.size() - 1);
  }

  root(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.nodes[0];
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined;

    const elToPop = this.nodes[0];
    const last = this.nodes.pop()!;
    this.nodes[0] = last;
    this.heapifyDown(0);

    return elToPop;
  }

  size(): number {
    return this.nodes.length;
  }

  isEmpty(): boolean {
    return this.nodes.length === 0;
  }

  clear() {
    this.nodes = [];
  }
}

export class MinHeap<T> extends Heap<T> {
  comparator(a: T, b: T): number {
    return MIN_COMPARATOR(a, b);
  }
}

export class MaxHeap<T> extends Heap<T> {
  comparator(a: T, b: T): number {
    return MAX_COMPARATOR(a, b);
  }
}
