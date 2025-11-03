
function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {

    function bfs(root) {
        if (!root) return false;

        const left = bfs(root.left);
        const right = bfs(root.right);

        if (left) {
            root.left = null;
        }

        if (right) {
            root.right = null;
        }

        if (root.val === target && root.left === null && root.right === null) {
            return true;
        }

    }

    return bfs(root) ? null : root;
};

var removeLeafNodes = function(root, target) {
    if (root === null) return null;
    // 二叉树递归框架
    // 如果左右子节点需要被删除，先递归删除它们
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    // 后序遍历位置，此时节点 root 直到自己是否需要被删除
    if (root.val === target && root.left === null && root.right === null) {
        return null;
    }
    return root;
};