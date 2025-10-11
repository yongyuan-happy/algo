function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null || l1.val === 0) {
        return l2;
    }

    if (l2 === null || l2.val === 0) {
        return l1;
    }

    let cur1: ListNode | null = l1;
    const l1Arr: number[] = [];
    while (cur1 !== null) {
        l1Arr.push(cur1.val)
        cur1 = cur1.next;
    }

    let cur2: ListNode | null = l2;
    const l2Arr: number[] = [];
    while (cur2 !== null) {
        l2Arr.push(cur2.val)
        cur2 = cur2.next;
    }
    const dummy = new ListNode();
    let cur3 = dummy;
    let res = (Number(l1Arr.reverse().join('')) + Number(l2Arr.reverse().join(''))).toString().split('').reverse();

    res.forEach(
        (val) => {
            cur3.next = new ListNode(Number(val));
            cur3 = cur3.next;
        }
    );


    return dummy.next;
};