class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {

    constructor() {
        this._head = null;
        }

    append(value) {
        const newNode = new Node(value);

        if (!this._head) {
            this._head = newNode;
            return;
        }

        let current = this._head;
        while (current.nextNode) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }
    
    prepend(value) {
        const newNode = new Node(value, this._head);
        this._head = newNode;
    }

    size() {
        let count = 0;
        let current = this._head;

        while (current) {
            count++;
            current = current.nextNode;
        }

        return count;
    }

    head() {
        return this._head ? this._head.value : undefined;
    }

    tail() {
        if (!(this._head)) return undefined;

        let current = this._head;

        while (current.nextNode) {
            current = current.nextNode;
        }

        return current.value;
    }

    at(index) {
        let current = this._head;
        let i = 0;

        while (current) {
            if (i === index) return current.value;

            current = current.nextNode;
            i++;
        }

        return undefined;
    }

    pop() {
        if (!(this._head)) return undefined;

        const value = this._head.value;
        this._head = this._head.nextNode;

        return value;
    }

    contains(value) {
        let current = this._head;

        while(current) {
            if (current.value === value) return true;

            current = current.nextNode;
        }

        return false;
    }

    findIndex(value) {
        let current = this._head;
        let index = 0;

        while (current) {
            if (current.value === value) return index;

            current = current.nextNode;
            i++;
        }

        return -1;
    }

    toString() {
        if (!(this._head)) return "";

        let result = "";
        let current = this._head;

        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        result += "null";
        return result;
    }
}