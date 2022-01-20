import { Heap } from "./Heap";

export class PriorityQueue<T> {
  heap: Heap<T>;

  constructor(items: T[], comparator: (a: T, b: T) => number) {
    this.heap = new Heap(items, comparator);
  }

  enqueue(el: T, priority: number) {
    this.heap.add(el);
  }

  dequeue() {
    if (this.heap.isEmpty()) return null;

    return this.heap.pop();
  }

  size(): number {
    return this.heap.size();
  }

  isEmpty(): boolean {
    return this.heap.isEmpty();
  }

  clear() {
    this.heap.clear();
  }

  toArray() {}
}
