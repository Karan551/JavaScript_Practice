// --------------------Doubly Linked List----------------------
class Node {
    constructor(prev = null, data = null, next = null) {
        this.prev = prev
        this.item = data
        this.next = next
    }
}

class DLL {
    constructor(start = null) {
        this.start = start
        this.item_count = 0
    }

    is_empty() {
        return this.start === null
    }
    insert_at_start(data) {
        let node_object = new Node(null, data, this.start)
        if (!this.is_empty()) {
            this.start.prev = node_object
        }
        this.start = node_object
        this.item_count += 1
    }
    insert_at_last(data) {
        let temp = this.start
        if (temp == null) {
            let node_object = new Node(null, data)
            this.start = node_object
        }
        else {
            while (temp.next != null) {
                temp = temp.next
            }
            let node_object = new Node(temp, data)
            temp.next = node_object
        }
        this.item_count += 1
    }
    insert_after(search_data, insert_data) {

    }

    printObject() {
        if (!this.is_empty()) {
            let temp = this.start
            while (temp != null) {
                console.log(temp.item)
                temp = temp.next
            }
        }
        else {
            console.log("List is empty....")
        }
        // console.log(temp.item)
    }
    search(data) {
        let temp = this.start
        while (temp.next != null) {
            if (temp.item == data) {
                return true;
            }
            temp = temp.next
        }
        if (temp.next == null) {
            return false
        }
    }
    delete_first() {
        if (!this.is_empty()) {
            if (this.start.next == null) {
                this.start = null
            } else {
                this.start.next.prev = null
                this.start = this.start.next
            }
            this.item_count -= 1
        }
        else {
            return null
        }
    }
    delete_last() {
        if (!this.is_empty()) {
            if (this.start.next == null) {
                this.start = null
            } else {
                let temp = this.start
                while (temp.next != null) {
                    temp = temp.next
                }
                temp.next.prev.next = null
            }
            this.item_count = 1

        }
    }
    size() {
        return this.item_count
    }
}
// ------------------------Testing Code-------------
let myList = new DLL()
console.log("List is empty:", myList.is_empty())
myList.insert_at_start(20)
myList.insert_at_start(40)
myList.insert_at_start(50)
myList.insert_at_last(100)
myList.insert_at_last(900)
myList.printObject()

console.log("List is empty:", myList.is_empty())
console.log("Size is:", myList.size())
console.log('\n')
myList.delete_first()
myList.delete_first()
myList.delete_first()
myList.delete_first()
myList.delete_first()
myList.printObject()
console.log("Size is:", myList.size())