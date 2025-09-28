// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//     if (headA === null || headB === null) {
//         return null;
//     }
//     let pointerA = headA;
//     let pointerB = headB;
//     if (pointerA === pointerB) {
//         return pointerA;
//     }
//     let PSet = new Set();

//     while (pointerA !== null) {
//         PSet.add(pointerA);
//         pointerA = pointerA.next;
//     }

//     while (pointerB !== null) {
//         if (PSet.has(pointerB)) {
//             return pointerB;
//         }
//         pointerB = pointerB.next;
//     }

//     return null;
// };
// 找到两个单向链表相交的可能存在无节点则返回null第一个节点。

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) {
        return null;
    }

    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA === null ? headB : pointerA.next;
        pointerB = pointerB === null ? headA : pointerB.next;
    }

    return pointerA
};

// 把对方的路重新走一遍就会相遇;