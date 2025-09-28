function sumNumbers(root: TreeNode | null): number {
    if (!root) return 0;

    let res = 0;

    function traverse(root: TreeNode | null, path: number[]) {
        if (!root) return;

        path.push(root.val);

        if (!root.left && !root.right) {
            res = res + Number(path.join());
            path.pop();
            return;
        }

        traverse(root.left, path);
        traverse(root.right, path);

        path.pop();
    }

    traverse(root, [])

    return res;
};