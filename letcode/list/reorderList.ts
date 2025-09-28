function reorderList(head: ListNode | null): void {
    const arr: ListNode[] = [];
    let cur = head;
    while (cur) {
        arr.push(cur);
        cur = cur.next;
    }
    let i = 0, j = arr.length - 1;
    while (i < j) {
        arr[i].next = arr[j];
        i++;
        // 总长度为偶数的时候 避免成环
        if (i === j) {
            break;
        }
        arr[j].next = arr[i]
        j--;
    }

    // 最后一步打断最后一个节点的链接
    arr[i].next = null;
};

// 额外运用了数组去解决链表无法快速索引的问题