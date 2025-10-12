// 二叉树的遍历框架
var traverse = function (root) {
    if (root === null) {
        return;
    }
    // 前序位置
    traverse(root.left);
    // 中序位置
    traverse(root.right);
    // 后序位置
};

function preorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;

    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const node = stack.pop()!;
        res.push(node.val);

        // 先右再左，保证左子树先出栈
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return res;
}

function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    const stack: TreeNode[] = [];
    let cur: TreeNode | null = root;

    while (cur !== null || stack.length > 0) {
        // 关键点1：一直往左走到底
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }

        // 关键点2：弹出栈顶（当前子树根节点）
        cur = stack.pop()!;
        res.push(cur.val); // 访问根节点

        // 关键点3：转向右子树
        cur = cur.right;
    }

    return res;
}

function postorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;

    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const node = stack.pop()!;
        res.push(node.val);

        // 先左后右（保证出栈顺序为右后左，从而得到 Root-Right-Left）
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return res.reverse();
}



