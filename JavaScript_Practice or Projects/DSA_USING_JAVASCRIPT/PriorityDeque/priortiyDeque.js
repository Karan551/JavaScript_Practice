console.log("Priority Deque Practice");
class PriorityDeque {
  constructor() {
    this.myList = [];
  }
  is_empty() {
    return this.myList.length == 0;
  }
  size() {
    return this.myList.length;
  }
  push(data, priority_number) {
    let index = 0;
    while (
      index < this.myList.length &&
      priority_number >= this.myList[index][1]
    ) {
      index += 1;
    }
    this.myList.splice(index, 0, [data, priority_number]);
    // console.log(this.myList);
  }
  pop = () => {
    if (this.is_empty()) {
      throw new Error("Priority Deque is Empty.");
    }
    return this.myList.shift(0);
  };
  printObject = () => {
    console.log(this.myList);
  };
}
// -------------------Testing Code-------------------
let myPriorityDeque = new PriorityDeque();
console.log("Priority Deque is empty:", myPriorityDeque.is_empty());
myPriorityDeque.push(20, 5);
myPriorityDeque.push(120, 4);
myPriorityDeque.push(10, 1);
myPriorityDeque.printObject();
// myPriorityDeque.pop()
// console.log("\n")
myPriorityDeque.printObject();

console.log("Priority Deque is empty:", myPriorityDeque.is_empty());
