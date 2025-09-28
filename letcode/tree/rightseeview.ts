function rightSideView(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;

    traverse(root);

    // 层序遍历
    function traverse(root) {
        if (!root) return;

        const stack: (TreeNode | null)[] = [root];

        while (stack.length !== 0) {
            const len = stack.length;

            for (let i = 0; i < len; i++) {
                // 直接使用弹出来的值 不要用数组取值
                const cur = stack.shift();

                if (cur.left) stack.push(cur.left);
                if (cur.right) stack.push(cur.right);

                if (i === len - 1) {
                    res.push(cur.val)
                }
            }
        }
    }

    return res;
};