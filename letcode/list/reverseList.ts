function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let cur = head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};

// 分析这种写法主要是用了两个指针去完成

