function kthSmallest(root: TreeNode | null, k: number): number {
    let ans = 0;

    function Dfs(root: TreeNode | null) {
        if (node === null || k === 0) {
            return;
        }
        Dfs(root.left);
        if (k === 0) {
            ans = root.val;
        }
        k--;
        Dfs(root.right);
    }

    Dfs(root);
    return ans;
};