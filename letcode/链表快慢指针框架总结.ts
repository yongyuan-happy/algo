// 单链表的创建 链表只能从头节点开始向后找
var ListNode = function (x) {
    this.val = x;
    this.next = null;
};

// 输入一个数组，转换为一条单链表
var createLinkedList = function (arr) {
    if (arr == null || arr.length == 0) {
        return null;
    }
    var head = new ListNode(arr[0]);
    var cur = head;
    for (var i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
}

// 双链表创建
function DoublyListNode(x) {
    this.val = x;
    this.next = this.prev = null;
}

var createDoublyLinkedList = function (arr) {
    if (arr === null || arr.length === 0) {
        return null;
    }

    var head = new DoublyListNode(arr[0]);
    var cur = head;

    // for 循环迭代创建双链表
    for (var i = 1; i < arr.length; i++) {
        var newNode = new DoublyListNode(arr[i]);
        cur.next = newNode;
        newNode.prev = cur;
        cur = cur.next;
    }

    return head;
}

// 快慢指针 删除第k个节点 让快指针先走k 然后慢指针再出发 快指针指向null 慢指针就到了k节点
// 快慢指针 删除中点 让快指针走k两步 慢指针走一步 快指针指向null 慢指针就到了中点
// 是否含环 让快指针走k两步 慢指针走一步 如果相遇就有环
// 如果相遇让其中任一个指针指向头节点，然后让它俩以相同速度前进，再次相遇时所在的节点位置就是环开始的位置
// 判断两个链表是否相交 让P1 跑完链表A 再跑链表B 让P2跑完链表B 在跑链表A

// 寻找回文链表的核心思想是从中心向外扩散
