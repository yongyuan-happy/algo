function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return head;
    }

    const dummy = new ListNode(0, head);

    let cur = dummy;
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val;
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};

var deleteDuplicates3 = function (head) {
    if (!head) {
        return head;
    }

    let cur = head;
    while (cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};