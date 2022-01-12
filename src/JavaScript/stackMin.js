class StackNode {
  constructor(val, min) {
    this.val = val;
    this.min = min;
  }
}

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(el) {
    const topMin = this.stack[this.stack.length - 1]?.min ?? Infinity;
    return this.stack.push(new StackNode(el, Math.min(el, topMin)));
  }

  pop() {
    return this.stack.pop();
  }

  min() {
    return this.stack[this.stack.length - 1].min;
  }
}

// [6,3,5,1]
// [{val: 6, min: 6},{ val: 3, min: 3}, {val: 5, min: 3}, {val: 1, min: 1}]

const minStack = new MinStack();

minStack.push(6);
console.log(minStack.min());
minStack.push(3);
console.log(minStack.min());
minStack.push(5);
console.log(minStack.min());
minStack.push(1);
console.log(minStack.min());
