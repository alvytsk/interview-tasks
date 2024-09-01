class Stack {
  
  constructor() {
    this.stack = [];
  }
  
  push(item) {
    this.stack.push(item);
  }
  
  pop() {
    return this.stack.pop();
  }
  
  size() {
    return this.stack.length;
  }
}

class Queue {

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(item) {
    this.stack1.push(item);

    console.log('eq stack1', this.stack1.stack);
    console.log('eq stack2', this.stack2.stack);
  }

  dequeue() {
    while (this.stack1.size() > 1) {
      this.stack2.push(this.stack1.pop());
    }

    console.log('dq #1 stack1', this.stack1.stack);
    console.log('dq #1 stack2', this.stack2.stack);

    const item = this.stack1.pop();
    while (this.stack2.size() > 0) {
      this.stack1.push(this.stack2.pop());
    }

    console.log('dq #2 stack1', this.stack1.stack);
    console.log('dq #2 stack2', this.stack2.stack);

    return item;
  }

  count() {
    return this.stack1.size() + this.stack2.size();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

queue.dequeue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.count());
queue.dequeue();
queue.dequeue();

console.log(queue.count());