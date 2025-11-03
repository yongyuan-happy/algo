
function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {

    function traverse(node, dep) {
        if (!node) return;
        if (depth === 1) {
            const dummy = new TreeNode(val);
            dummy.left = root;
            root = dummy;
            return;
        }

        if (dep === depth - 1) {
            const left = new TreeNode(val, node.left);
            const right = new TreeNode(val, null, node.right);

            node.left = left;
            node.right = right;

            return;
        }

        traverse(node.left, dep + 1);
        traverse(node.right, dep + 1);

    }

    traverse(root, 1);

    return root;
};

// 先序遍历 解决问题