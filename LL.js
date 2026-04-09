class LinkedList {
    //      0   1  2  3  4  5  6   7
    list = [49, 2, 1, 3, 4, 63, 2, 4];

    constructor(value, pointer) {
        this.value = value;
        this.pointer = pointer;
        }

        append(value) {
            this.list.push(value);
        }

        prepend(value) {
            this.list.reverse();
            this.list.push(value);
            this.list.reverse();
        }

        size() {
            if (!(this.list)) return undefined;

            return this.list.length;
        }

        head() {
            if (!(this.list)) return undefined;
            
            return this.list[0];
        }

        tail() {
            const length = this.size();

            return this.list[length - 1];
        }

        at(index) {
            if (!(this.list)) return undefined;

            return this.list[index];
        }

        pop() {
            if (!(this.list)) return undefined;

            const head = this.list[0];

            this.list.reverse();
            this.list.pop();
            this.list.reverse();

            return head;
            
        }

        contains(value) {
            return this.list.includes(value);
        }

        findIndex(value) {
            return this.list.indexOf(value);
        }

        toString() {
            if (!(this.list)) return " ";

            const length = this.list.length;

            for (let i = 0; i <= length; i++) {
                if (this.list[i] === undefined) {
                    console.log("null");
                    return;
                }

                process.stdout.write(`( ${this.list[i]} ) -> `);    // prints to console w/o newline
            }
        }
    }

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const ll = new LinkedList();


// console.log("Head of list : " + ll.head());
// console.log("Tail of list : " + ll.tail());
// console.log("Size of list: " + ll.size());
// console.log("Value at index 3 : " + ll.at(3));  // should be '3'
// console.log("Value of popped head : " + ll.pop()); 
// console.log("Does list contain 4? " + ll.contains(4)); // should be true
// console.log("Index of 4 : " + ll.findIndex(4));
// ll.toString();
// ll.append(100);
// ll.prepend(100);