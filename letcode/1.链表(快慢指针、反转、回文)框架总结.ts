class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// 给你一个链表的头节点 head ，判断链表中是否有环。

// 是否含环 让快指针走k两步 慢指针走一步 如果相遇就有环
function hasCycle(head: ListNode | null): boolean {

    if (head == null || head.next == null) return false; // 0或1个节点的情况，不存在环
    // 用hash表解决问题
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};

// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 解题最重要的思路就是让慢指针重新指向头节点然后跑一遍
// 如果相遇让其中任一个指针指向头节点，然后让它俩以相同速度前进，再次相遇时所在的节点位置就是环开始的位置
function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // 第一阶段：判断是否有环
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) break; // 相遇表示有环
    }

    // 如果没有环
    if (!fast || !fast.next) return null;

    // 第二阶段：找环的入口
    let ptr: ListNode | null = head;
    while (ptr !== slow) {
        ptr = ptr!.next;
        slow = slow!.next;
    }

    return ptr; // 环的起点
}



// 找到两个单向链表相交的可能存在无节点则返回null第一个节点。

// 把对方的路重新走一遍就会相遇;
// 判断两个链表是否相交 让P1 跑完链表A 再跑链表B 让P2跑完链表B 在跑链表A
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

//给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 利用数组存储链表 再利用数组的取值删除倒数第n个节点
// 另一个解法 快慢指针 删除第k个节点 让快指针先走k 然后慢指针再出发 快指针指向null 慢指针就到了k节点
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) {
        return null;
    }

    let cur: ListNode | null = head;
    const arr: ListNode[] = [];

    while (cur !== null) {
        arr.push(cur);
        cur = cur.next;
    }

    let len = arr.length;

    if (n === len) {
        // 删除的是头结点
        return head.next;
    }

    arr[len - n - 1]['next'] = arr[len - n]['next'];
    arr[len - n]['next'] = null;

    return head;
};

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 新建一个链表 while 循环 将链表值 加到新创建的链表上
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const newHead = new ListNode();
    let cur = newHead;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }

    if (list1 !== null) {
        cur.next = list1;
    }
    if (list2 !== null) {
        cur.next = list2;
    }

    return newHead.next;
};

// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const k = lists.length;
    if (k === 0) {
        return null
    }
    if (k === 1) {
        return lists[0]
    }
    let fm = mergeTwoLists(lists[0], lists[1]);

    for (let i = 2; i < k; i++) {
        fm = mergeTwoLists(fm, lists[i]);
    }

    return fm;
};


// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
// 你应当 保留 两个分区中每个节点的初始相对位置。

// 用两个链表来做 小链表存储小于x的值 大链表存储大于等于x的值
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


// 快慢指针 删除中点 让快指针走k两步 慢指针走一步 快指针指向null 慢指针就到了中点
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
// 给定一个头节点为 head 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 cnt 个训练项目编号。

// 快慢指针
// 要多走一步 n+1步 因为判断的是fast 不是fast.next
function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
    if (head === null) {
        return null;
    }

    let slow: ListNode | null, fast: ListNode | null;
    slow = fast = head;

    for (let i = 1; i < cnt; i++) {
        fast = fast.next
    }

    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};

// 链表去重
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

// 92. 反转链表 II
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    // 链表不存在 或者只有一个节点 或者 左右相等不需要反转
    if (!head || !head.next || left === right) {
        return head;
    }

    // 虚拟头节点
    const dummy = new ListNode(0, head);

    let cur: ListNode | null = dummy;
    let position = 0;

    // 头插法反转
    let reversed: ListNode | null = null;

    // 开始反转的位置
    // 结束反转的下一个位置
    // 开始反转的前一个位置
    let start, endNext, beforeLeft;

    while (cur) {
        const next = cur.next;
        if (position === left) {
            start = cur;
        }
     
        if (position === right) {
            endNext = cur.next;
        }

        if (position === left - 1) {
            beforeLeft = cur;
        }

        if (left <= position && position <= right) {
            cur.next = reversed;
            reversed = cur;
        }
        cur = next;
        position++;
    }

    if (beforeLeft) beforeLeft.next = reversed;
    if (start) start.next = endNext;

    return dummy.next;
};

// 给你一个字符串 s，找到 s 中最长的 回文 子串。
// 回文串的的长度可能是奇数也可能是偶数，解决该问题的核心是从中心向两端扩散的双指针技巧。
function longestPalindrome(s: string): string {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 0;

    const expandAroundCenter = (left: number, right: number) => {
        while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        // 奇数法判断
        let s1 = expandAroundCenter(i, i);
        // 偶数法判断
        let s2 = expandAroundCenter(i, i + 1);

        let s3 = Math.max(s1, s2);

        if (s3 > maxLength) {
            maxLength = s3;
            start = i - (Math.floor((s3 - 1) / 2));
        }
    }

    return s.substring(start, start + maxLength);
};


// 分析这种写法主要是用了两个指针去完成
// 什么时候需要用虚拟头结点？我这里总结下：当你需要创造一条新链表的时候，可以使用虚拟头结点简化边界情况的处理。
// 比如说，让你把两条有序链表合并成一条新的有序链表，是不是要创造一条新链表？再比你想把一条链表分解成两条链表，
// 是不是也在创造新链表？这些情况都可以使用虚拟头结点简化边界情况的处理。

