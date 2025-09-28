function largestValues(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;

    const queue = [root];

    while (queue.length) {
        const size = queue.length;
        let max = -Infinity;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            max = Math.max(max, curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        res.push(max);
    }

    return res;
};