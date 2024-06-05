// -----------------------Queue Using Array---------------
class Queue {
    constructor() {
        this.my_queue = []
    }
    is_empty() {
        return this.my_queue.length == 0
    }
    enqueue(data) {
        this.my_queue.push(data)
    }
    dequeue() {
        if (!this.is_empty()) {
            this.my_queue.shift()
        }

    }
    get_front() {
        // This will gives us oldest value of queue.
        if (!this.is_empty()) {
            return this.my_queue[0]
        }
        throw new Error("Queue is under flow.")
    }
    get_rear() {
        // This will give us latest value of queue.
        if (!this.is_empty()) {
            let len = this.my_queue.length
            return this.my_queue[len - 1]
        }
        throw new Error("Queue is under flow.")

    }
    size() {
        return this.my_queue.length
    }
}
//-------------------Testing code------------------
// create an object 
let my_st = new Queue()
console.log(my_st.is_empty())
my_st.enqueue(20)
my_st.enqueue(60)
my_st.enqueue(80)
my_st.enqueue(50)
my_st.enqueue(70)
// my_st.dequeue()
// my_st.dequeue()
console.log(my_st.is_empty())
console.log('This is the front element (oldest) of the queue: ',my_st.get_front())
// console.log('This is the front element (oldest) of the queue: ',my_st.get_rear())
try{
    console.log('This is the front element (oldest) of the queue: ',my_st.get_rear())
}catch(e){
console.log('Exception :',e)
}
console.log('The size of the queue is :',my_st.size())
// ------------------------Queue Using Array---------------
// ------------------------Questions------------
/* 
//Que:1-> Define a class Queue to implement queue data structure using Array.Define constructor method to create an empty 
Array object as instance object member of Queue.
// Que:2-> Define a method is_empty() to check the queue is empty in Queue class.
// Que:3-> In Queue class define enqueue() method to add data at the rear end of the queue.
// Que:4-> In Queue class define dequeue() method to remove front element from the queue.
// Que:5-> In Queue class define get_front() method to return front(oldest) element of the queue.
// Que:6-> In Queue class define get_rear() method to return rear (last) element of the queue.
// Que:7-> In  Queue class define size() method to return the size of the queue that is number of items present in the queue.


 */