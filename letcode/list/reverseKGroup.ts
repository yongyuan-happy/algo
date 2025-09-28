function reverseKGroup(head: ListNode | null, k: number): ListNode | null {

    let cur = head;
    let length = 0;

    while (cur) {
        length++;
        cur = cur.next;
    }

    for (let i = 1; i < length / k; i++) {
        reverseBetween(head, i * k - 1, i * k);
    }

    return head;
};