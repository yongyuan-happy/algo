// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     const rev = reverseList(head);
//     if (!rev) return null;


//     // 虚拟头结点，方便删除头节点
//     let dummy = new ListNode(0, rev);
//     let cur = dummy;

//     // 找到第 n 个节点的前一个节点
//     for (let i = 0; i < n - 1; i++) {
//         if (cur.next) {
//             cur = cur.next;
//         } else {
//             // n 超过链表长度
//             return reverseList(dummy.next);
//         }
//     }

//     // 删除第 n 个节点
//     if (cur.next) {
//         cur.next = cur.next.next;
//     }

//     return reverseList(dummy.next);
// };

// function reverseList(head: ListNode | null) {
//     let prev: ListNode | null = null;
//     let cur = head;
//     while (cur) {
//         let next = cur.next;
//         cur.next = prev;
//         prev = cur;
//         cur = next;
//     }
//     return prev;
// }


