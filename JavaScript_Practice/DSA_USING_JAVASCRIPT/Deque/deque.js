console.log("Hello Deque Data structure.")
class Node {
    constructor(prev = null, data = null, next = null) {
        this.prev = prev
        this.item = data
        this.next = next
    }

}

class Deque {
    constructor() {
        this.front = null
        this.rear = null
        this.item_count = 0
    }
    is_empty = () => {
        return this.front == null
    }
    insert_front(data) {
        let node_object = new Node(null, data, this.front)
        if (this.is_empty()) {
            this.rear = node_object
        } else {
            this.front.prev = node_object
        }
        this.front = node_object
        this.item_count += 1
    }
    insert_rear(data) {
        let node_object = new Node(this.rear, data)
        if (this.is_empty()) {
            this.front = node_object
        } else {
            this.rear.next = node_object
        }
        this.rear = node_object
        this.item_count += 1
    }
    get_front() {
        if (!this.is_empty()) {
            return this.front.item
        } else {
            throw new Error("Deque is empty.")
        }
    }
    get_rear() {
        if (!this.is_empty()) {
            return this.rear.item
        } else {
            throw new Error("Deque is empty.")
        }
    }
    size() {
        return this.item_count
    }

    delete_front() {
        if (!this.is_empty()) {
            if (this.front == this.rear) {
                this.front = null
                this.rear = null
            } else {
                this.front.next.prev = null
                this.front = this.front.next
            }
            this.item_count -= 1
        } else {
            throw new Error("Deque is empty.")
        }
    }
    delete_rear() {
        if (!this.is_empty()) {
            if (this.front == this.rear) {
                this.front = null
                this.rear = null
            } else {
                this.rear.prev.next = null
                this.rear = this.rear.prev
            }
            this.item_count -= 1
        } else {
            throw new Error("Deque is empty.")
        }


    }



}
// -------------------------Testing code----------------
let myDeque = new Deque()
console.log("Deque is empty: ", myDeque.is_empty())
myDeque.insert_front(20)
myDeque.insert_front(40)
myDeque.insert_rear(30)
myDeque.insert_rear(50)
console.log("This is the rear (latest) element of the deque:", myDeque.get_rear())
console.log("This is the front (oldest) element of the deque:", myDeque.get_front())

console.log("Size of the Deque is :", myDeque.size())

console.log("Deque is empty: ", myDeque.is_empty())