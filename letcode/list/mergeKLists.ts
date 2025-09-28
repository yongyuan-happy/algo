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

