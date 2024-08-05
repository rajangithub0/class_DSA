class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class Linkedlist {
    head: ListNode | null;
    tail: ListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize = function (): number {
        return this.size;
    }
}

let l1 = new Linkedlist();
console.log(l1.getSize())