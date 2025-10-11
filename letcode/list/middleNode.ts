// function middleNode(head: ListNode | null): ListNode | null {
//     if (head === null) {
//         return null;
//     }

//     let cur = head;
//     let length = 0;
//     while (cur) {
//         cur = cur.next;
//         length++
//     }
//     let n = Math.floor(length / 2) + 1;

//     let cur2 = head;
//     while (--n > 0) {
//         cur2 = cur2.next;
//     }

//     return cur2;
// };

