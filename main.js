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
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    tail() {
        if(!this.head) {
            return null;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
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
            current = current.next;
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
        if (!this.head.next) {
            const valueToReturn = this.head.value;
            this.head = null;
            return valueToReturn;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        const valueToReturn = current.next.value;
        current.next = null;
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
            current = current.next;
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
            current = current.next;
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
            current = current.next;
        }
        return listString + 'null';
    }

}

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
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