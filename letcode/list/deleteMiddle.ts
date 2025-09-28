function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return null;
    }
    let length = 0;
    let cur = head;
    while (cur) {
        length++;
        cur = cur.next;
    }
    let del = Math.floor(length / 2);
    let dummyPre = new ListNode(0, head);
    while (del > 0) {
        dummyPre = dummyPre.next;
        del--;
    }
    let next = dummyPre.next;
    dummyPre.next = next.next;
    next.next = null;

    return head;
};
//链表中的解法 一是计算出链表的长度 二是用数组去存储链表 达到能够通过下标快速定位到链表节点的  三是删除节点