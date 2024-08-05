var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
var Linkedlist = /** @class */ (function () {
    function Linkedlist() {
        this.getSize = function () {
            return this.size;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return Linkedlist;
}());
var l1 = new Linkedlist();
console.log(l1.getSize());
