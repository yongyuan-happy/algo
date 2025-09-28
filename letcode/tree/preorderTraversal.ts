function preorderTraversal(root: TreeNode | null): number[] {
    const res = [];
    traverse(root, res);
    return res;
};

const traverse = (root, res) => {
    if (root === null) {
        return;
    }

    res.push(root.val);

    traverse(root.left, res);
    traverse(root.right, res);
}

function preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }

    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};


function preorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];

    if (root === null) {
        return res;
    }

    const stack: TreeNode[] = [root];

    while (stack.length !== 0) {
        const node = stack.pop()!;
        res.push(node.val);

        // 栈是后进先出，所以先放右，再放左
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return res;
};