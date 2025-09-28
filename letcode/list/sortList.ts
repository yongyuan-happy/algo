function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let cur = head;
    const linkArray: number[] = [];
    const dummy = new ListNode();
    let cur2 = dummy;

    while (cur) {
        linkArray.push(cur.val);
        cur = head.next;
    }

    linkArray.sort((f, s) => f - s);
    linkArray.forEach((v) => {
        cur2.next = new ListNode(v);
        cur2 = cur2.next;
    })

    return dummy.next;
};