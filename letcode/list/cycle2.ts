

function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    let slow = head;
    let fast = head;

    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }

    return null;
};

// 解题最重要的思路就是让慢指针重新指向头节点然后跑一遍