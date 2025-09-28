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

function middleNode(head: ListNode | null): ListNode | null {
    let slow, fast;
    slow = fast = head;

    while (fast !== null) {
        // 常用快慢指针判断方式
        if (fast.next === null) {
            return slow;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}