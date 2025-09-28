function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
    if (head === null) {
        return null;
    }

    let slow: ListNode | null, fast: ListNode | null;
    slow = fast = head;

    for (let i = 1; i < cnt; i++) {
        fast = fast.next
    }

    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};

// 要多走一步 n+1步 因为判断的是fast 不说fast.next