function postorderTraversal(root: TreeNode | null): number[] {
    const res = [];
    traverse(root, res);
    return res;
};

const traverse = (root, res) => {
    if (root === null) {
        return;
    }


    traverse(root.left, res);


    traverse(root.right, res);
    res.push(root.val);
}


function postorderTraversal(root: TreeNode | null): number[] {
    const res = [];
    traverse(root, res);
    return res;
};

const traverse = (root, res) => {
    if (root === null) {
        return;
    }


    traverse(root.left, res);

    traverse(root.right, res);

    res.push(root.val);
}


function postorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;

    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const node = stack.pop()!;
        res.push(node.val);

        // 栈是后进先出，所以先放左，再放右
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);

    }

    return res.reverse();
};