// Define the Node class for the linked list
class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node, initially null
    }
}

// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // Initially, the list is empty, so head is null
    }

    // Method to add a new node at the end of the linked list
    append(data) {
        const newNode = new Node(data); // Create a new node with the given data

        // If the list is empty, make this new node the head
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // Traverse the list to find the last node
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        // Assign the new node to the next of the last node
        current.next = newNode;
    }

    // Method to print the elements of the linked list
    print() {
        let current = this.head;
        let listStr = "";
        while (current !== null) {
            listStr += current.data + " -> ";
            current = current.next;
        }
        listStr += "null";
        console.log(listStr);
    }
}

// Example usage:
const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);

//myList.print(); // Output: 10 -> 20 -> 30 -> null
console.log(myList.print())
