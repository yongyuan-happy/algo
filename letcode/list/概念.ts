class NListNode {

    public val;
    public next;

    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


let createLinkedList = function (arr) {
    if (arr == null || arr.length == 0) {
        return null;
    }

    let head = new NListNode(arr[0]);

    let cur = head;

    for (let i = 1; i < arr.length; i++) {
        cur.next = new NListNode(arr[i]);
        cur = cur.next;
    }

    return head;
}


// 查。改
let head = createLinkedList([1, 2, 3, 4, 5]);
for (let p = head; p !== null; p = p.next) {
    console.log(p.val);
}


// 增
let newNode = new ListNode(0, head)
head = newNode;


let cur = head;

while (cur.next) {
    cur = cur.next;
}

cur.next = new ListNode(6);

cur = head;
for (let i = 0; i < 2; i++) {
    cur = cur.next;
}

let p = new ListNode();
p.next = cur.next;
cur.next = p


// 删
cur = head;
for (var i = 0; i < 2; i++) {
    cur = p.next;
}

p.next = p.next.next;

while (p.next.next !== null) {
    p = p.next;
}

p.next = null;

// 删除头结点
head = head.next;


// 双链表
function DoublyListNode(x) {
    this.val = x;
    this.next = this.prev = null;
}

let createDoublyLinkedList = (arr) => {
    if (arr === null || arr.length === 0) {
        return null;
    }

    var head = new DoublyListNode(arr[0]);
    var cur = head;

    for (let i = 1; i < arr.length; i++) {
        var newNode = new DoublyListNode(arr[i]);
        cur.next = newNode;
        newNode.prev = cur;
        cur = cur.next;
    }

    return head;
}

// 创建一条双链表
head = createDoublyLinkedList([1, 2, 3, 4, 5]);
let tail = null;


for (p = head; p !== null; p = p.next) {
    console.log(p.val);
    tail = p;
}

for (var p = tail; p !== null; p = p.prev) {
    console.log(p.val);
}

var head = createDoublyLinkedList([1, 2, 3, 4, 5]);


// 增
// 在双链表头部插入新节点 0
var newHead = new DoublyListNode(0);
newHead.next = head;
head.prev = newHead;
head = newHead;

var head = createDoublyLinkedList([1, 2, 3, 4, 5]);

var tail = head;
// 先走到链表的最后一个节点
while (tail.next !== null) {
    tail = tail.next;
}

var newNode = new DoublyListNode(6);
tail.next = newNode;
newNode.prev = tail;


// 后续操作与单节点无异 不在赘述


function kthSmallest(matrix: number[][], k: number): number {
    let arr: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
        }
    }
    arr.sort();
    return arr[k - 1];
};
