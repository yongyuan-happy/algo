function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    // 链表不存在 或者只有一个节点 或者 左右相等不需要反转
    if (!head || !head.next || left === right) {
        return head;
    }

    // 虚拟头节点
    const dummy = new ListNode(0, head);

    let cur: ListNode | null = dummy;
    let position = 0;

    // 头插法反转
    let reversed: ListNode | null = null;

    // 开始反转的位置
    // 结束反转的下一个位置
    // 开始反转的前一个位置
    let start, endNext, beforeLeft;

    while (cur) {
        const next = cur.next;
        if (position === left) {
            start = cur;
        }
        // 不能改成这样，存在越界情况
        // if (position === right + 1) {
        //     endNext = cur;
        // }
        if (position === right) {
            endNext = cur.next;
        }

        if (position === left - 1) {
            beforeLeft = cur;
        }

        if (left <= position && position <= right) {
            cur.next = reversed;
            reversed = cur;
        }
        cur = next;
        position++;
    }

    if (beforeLeft) beforeLeft.next = reversed;
    if (start) start.next = endNext;

    return dummy.next;
};