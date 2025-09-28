function partition(head: ListNode | null, x: number): ListNode | null {
    if (head === null) {
        return null;
    }
    let cur: ListNode | null = head;
    let par1 = new ListNode();
    let par3 = new ListNode();

    let cur1 = par1;
    let cur3 = par3;

    while (cur !== null) {
        if (cur.val < x) {
            cur1.next = new ListNode(cur.val);
            cur1 = cur1.next
        } else {
            cur3.next = new ListNode(cur.val);
            cur3 = cur3.next
        }
        cur = cur.next;
    }

    cur1.next = par3.next;
    return par1.next;
};