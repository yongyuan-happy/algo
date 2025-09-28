function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let cur: ListNode | null = head;
    let length = 1;
    while (cur.next) {
        cur = cur.next;
        length++;
    }

    cur.next = head;
    let prev: ListNode | null = head;
    let rest = length - k;

    while (rest-- > 1) {
        prev = prev.next!;
    }

    let next = prev.next;
    prev.next = null;

    return next;
};