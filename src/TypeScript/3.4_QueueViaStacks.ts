// 3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
class QueueViaStacks {
  stack1: any[];
  stack2: any[];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(el: any) {
    this.stack1.push(el);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}

const queue = new QueueViaStacks();

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
