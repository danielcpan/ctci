// 3.3 Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
// threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be
// composed of several stacks and should create a new stack once the previous one exceeds capacity.
// SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
// (that is, pop () should return the same values as it would if there were just a single stack).
// FOLLOW UP
// Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.

class StackOfPlates {
  stacks: any[];
  curStackIdx: number;
  capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.stacks = [[]];
    this.curStackIdx = 0;
  }

  push(el: any) {
    if (this.stacks[this.curStackIdx].length === this.capacity) {
      this.stacks.push([]);
      this.curStackIdx++;
    }

    this.stacks[this.curStackIdx].push(el);
  }

  pop() {
    if (this.stacks[this.curStackIdx].length === 0 && this.curStackIdx > 0) {
      this.curStackIdx--;
      this.stacks.pop();
    }

    return this.stacks[this.curStackIdx].pop();
  }

  popAt(stackIdx: number) {
    const selectedStack = this.stacks[stackIdx];

    const elToPop = this.stacks[stackIdx].pop();

    if (selectedStack.length === 0) {
      this.stacks.splice(stackIdx, 1);
      this.curStackIdx--;
    }

    return elToPop;
  }
}

const stackOfPlates = new StackOfPlates(2);

stackOfPlates.push(1);
console.log(stackOfPlates.stacks);
stackOfPlates.push(2);
console.log(stackOfPlates.stacks);
stackOfPlates.push(3);
console.log(stackOfPlates.stacks);
stackOfPlates.push(4);
console.log(stackOfPlates.stacks);
stackOfPlates.popAt(0);
console.log(stackOfPlates.stacks);
stackOfPlates.popAt(0);
console.log(stackOfPlates.stacks);
stackOfPlates.pop();
console.log(stackOfPlates.stacks);
