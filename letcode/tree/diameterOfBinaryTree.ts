function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxL = 0;

    const maxDepth = function (root: TreeNode | null): number {

        if (!root) {
            return 0;
        }

        let leftMax = maxDepth(root.left);
        let rightMax = maxDepth(root.right);

        maxL = Math.max(leftMax + rightMax, maxL);

        return Math.max(leftMax, rightMax) + 1;
    };

    maxDepth(root);

    return maxL;
};





