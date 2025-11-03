// 这道题本质上 要掌握的就是经过每个节点所产生的最长同值路径 记录下来
var longestUnivaluePath = function (root) {
    let ans = 0;

    function dfs(root) {
        if (!root) return 0;

        const left = dfs(root.left);
        const right = dfs(root.right);
        let leftEdge = 0, rightEdge = 0;

        if (root.left && root.left.val === root.val) leftEdge = left + 1;
        if (root.right && root.right.val === root.val) rightEdge = right + 1;

        ans = Math.max(ans, leftEdge + rightEdge);

        return Math.max(leftEdge, rightEdge);
    }

    dfs(root);

    return ans;
};
