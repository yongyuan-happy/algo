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
