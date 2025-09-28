function isPalindrome(head: ListNode | null): boolean {
    if (head === null) {
        return true;
    }

    let slow, fast;
    slow = fast = head;

    while (fast.next.next && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondList = reverseList(slow.next);
    let res = true;
    let p = secondList;
    let q = head;

    while (res && p.next !== null) {
        if (p?.val !== q.val) {
            res = false;
        }
        p = p?.next;
        q = q.next;
    }

    slow.next = reverseList(slow.next);

    return res;
};