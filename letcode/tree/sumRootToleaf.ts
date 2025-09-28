function sumRootToLeaf(root: TreeNode | null): number {
    if (!root) return 0;

    let res = 0;

    function traverse(root: TreeNode | null, path: number[]) {
        if (!root) return;

        path.push(root.val);

        if (!root.left && !root.right) {

            // 二进制转十进制
            res += parseInt(path.join(''), 2) // 26
            
            path.pop();
            return;
        }

        traverse(root.left, path);
        traverse(root.right, path);

        path.pop();
    }

    traverse(root, []);

    return res;
};