class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {


    // let cur = head;
    // const arr = new Set();
    // arr.add(cur);
    // while (cur !== null) {
    //     let next = cur;
    //     if (arr.has(next)) {
    //         return true
    //     } else {
    //         arr.add(next)
    //     }
    //     cur = next;
    // }
    // return false;

    if (head == null || head.next == null) return false; // 0或1个节点的情况，不存在环
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

// 分析这种写法主要是用了两个指针去完成