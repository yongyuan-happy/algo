function binaryTreePaths(root: TreeNode | null): string[] {
    const res: string[] = []
    const cord: number[] = [];

    if (!root) return res;

    traverse(root, cord, res);

    return res;
};

function traverse(root: TreeNode | null, cord: number[], res: string[]) {
    if (!root) return;

    cord.push(root.val);

    traverse(root.left);
    traverse(root.right);
    if (!root.left && !root.right) {
        res.push(cord.join('->'));
    }

    cord.pop();
}