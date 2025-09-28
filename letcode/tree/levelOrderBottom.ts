function levelOrderBottom(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;
    const queue = [root];
    while (queue.length !== 0) {
        const length = queue.length;
        const cash = []
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            cash.push(node.val)
        }
        res.push([...cash])
    }
    return res.reverse();
};