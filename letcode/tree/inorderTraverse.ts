function inorderTraversal(root: TreeNode | null): number[] {
    const res = [];
    traverse(root, res);
    return res;
};

const traverse = (root, res) => {
    if (root === null) {
        return;
    }

    traverse(root.left, res);

    res.push(root.val);

    traverse(root.right, res);
}


function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;

    const stack: TreeNode[] = [];
    let cur = root;

    while (cur || stack.length > 0) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop()!
            res.push(cur.val);
            cur = cur.right;
        }
    }

    return res;
};

function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;

    const stack1: TreeNode[] = [root];

    while (stack1.length) {
        const node = stack1.pop()!;
        if (node.left || node.right) {
            // 中序需要先处理左子树，所以把当前节点压到 stack2
            if (node.right) stack1.push(node.right);
            stack1.push(new TreeNode(node.val)); // 临时节点，表示“访问点”
            if (node.left) stack1.push(node.left);


        } else {
            // 叶子节点（或已处理的临时节点），直接收集
            res.push(node.val);
        }
    }
    return res;
};

