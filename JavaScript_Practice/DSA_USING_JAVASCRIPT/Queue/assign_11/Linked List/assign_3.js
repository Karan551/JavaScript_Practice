// console.log('Hello World!')
class Node {
    constructor(item = null, next = null) {
        this.item = item
        this.next = next
    }
}
class SLL {
    constructor(start = null) {
        this.start = start
    }
    is_empty() {
        return this.start == null
    }
    insert_at_start(data) {
        let node_object = new Node(data, this.start)
        this.start = node_object

    }
    insert_at_last(data) {
        let node_object = new Node(data)
        if (!this.is_empty()) {
            let temp = this.start
            while (temp.next != null) {
                temp = temp.next
            }
            temp.next = node_object

        } else {
            // if List is empty then do this.
            this.start = node_object
        }
    }
    printObject() {
        let temp = this.start
        while (temp.next != null) {
            console.log(temp.item)
            temp = temp.next
        }
        // To print the last item into the console
        console.log(temp.item)

    }
    delete_first() {
        if (!this.is_empty()) {
            this.start = this.start.next
        } else {
            throw new Error("Linked List Is Empty.")
        }
    }
    delete_last() {
        if (this.is_empty()) {
            throw new Error("Linked List Is Empty.")
        }
        // if linked list contains only one item then do this.
        else if (this.start.next == null) {
            this.start = null
        }
        // If linked list contains at least two list object then do this.
        else {
            let temp = this.start
            while (temp.next.next != null) {
                temp = temp.next
            }
            temp.next = null
        }
    }
    search(data) {
        if (this.is_empty()) {
            throw new Error("Linked List Is Empty.")
        }
        let temp = this.start
        while (temp.next != null) {
            if (temp.item === data) {
                return true
            }
            temp = temp.next
        }
        // this is used to check last element of the SLL
        if (temp.item === data) {
            return true
        }
        //If item not in the SLL.
        else if (temp.next == null) {
            return false
        }
    }

}
// --------------Testing Code-----------
let myList = new SLL()
console.log(myList.is_empty())
// myList.insert_at_start(20)
// myList.insert_at_start(80)
myList.insert_at_start(30)
// myList.insert_at_start(70)
// myList.insert_at_last(100)
// myList.insert_at_last(2000)

myList.printObject()
// myList.delete_first()
// myList.delete_last()
// myList.delete_last()
// myList.delete_first()
// console.log('Is 800 in the SLL:', myList.search(800))
console.log('\n')
// myList.printObject()
