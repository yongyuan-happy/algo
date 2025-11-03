
function findFrequentTreeSum(root: TreeNode | null): number[] {
    const cnt = new Map();
    let maxCnt = 0;

    function dfs(node) {
        if (!node) return 0;

        const sum = node.val + dfs(node.left) + dfs(node.right);

        cnt.set(sum, (cnt.get(sum) || 0) + 1);

        maxCnt = Math.max(maxCnt, cnt.get(sum));

        return sum;
    }

    dfs(root);

    const list = [];
    for (const [s, c] of cnt.entries()) {
        if (c === maxCnt) {
            list.push(s);
        }
    }

    for (const [s, c] of cnt.entries()) {

    }

    return list;
};