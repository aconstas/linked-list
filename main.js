class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
        this.size++;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        if(!this.head) {
            return null;
        }
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        if (index < 0) {
            return "Index cannot be negative";
        }

        let current = this.head;
        let currentIndex = 0;

        while (current !== null && currentIndex < index) {
            current = current.nextNode;
            currentIndex++;
        }

        if (current === null) {
            return null;
        }

        return current.value;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        if (!this.head.nextNode) {
            const valueToReturn = this.head.value;
            this.head = null;
            return valueToReturn;
        }
        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        const valueToReturn = current.nextNode.value;
        current.nextNode = null;
        this.size--;
        return valueToReturn;
    }

    contains(value) {
        if (!this.head) {
            return false;
        }
        
        let current = this.head;
        
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }

        return false;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentIndex = 0;
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return currentIndex;
            }
            current = current.nextNode;
            currentIndex++;
        }

        return null;
    }

    toString() {
        if(!this.head) {
            return '';
        }
        let listString = '';
        let current = this.head;
        while (current) {
            listString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return listString + 'null';
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }
        const newNode = new Node(value);
        let current = this.head;
        let currentIndex = 0;
        // inserting new node at the head
        if (index === 0 ) {
            // assigning the newNode to point to the former head
            newNode.nextNode = this.head;
            // assigning the newNode as the linked lists new head
            this.head = newNode;
        }
        while (current) {
            if (currentIndex === index - 1) {
                // the new value needs to point to the next node (the former value that was previously in the 'index')
                newNode.nextNode = current.nextNode;
                // the previous node needs to point to the new value ('value')
                current.nextNode = newNode;
                break;
            }
            
            current = current.nextNode;
            currentIndex++;
        }
        this.size++;
    }

    removeAt(index) {
        let currentIndex = 0;
        let current = this.head;
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            this.head = current.nextNode;
        } else {
            while(currentIndex < index) {
                if (currentIndex === index - 1) {
                    current.nextNode = current.nextNode.nextNode;
                    break;
                }
                current = current.nextNode;
                currentIndex++;
            }
        }
        this.size--;
        return firstList.toString();
    }
}





// Initialize a strongly linked list
let firstList = new LinkedList();
firstList.append('one');
firstList.append('two');
firstList.append('three');

console.log(firstList.toString());
// ( one ) -> ( two ) -> ( three ) -> null

console.log(firstList.getHead());
// Node { value: 'one', next Node {...}}

console.log(firstList.tail());
// Node { value: 'three', next: null }

console.log(firstList.at(1));
// two

console.log(firstList.getSize());
// 3

console.log(firstList.contains('four'));
// false