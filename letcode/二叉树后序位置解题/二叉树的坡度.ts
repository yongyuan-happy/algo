/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTilt(root: TreeNode | null): number {
    let res = 0;

    function dfs(root) {

        if (!root) return 0;

        const left = dfs(root.left);
        const right = dfs(root.right);

        res += Math.abs(left - right);

        return left + right + root.val;
    }

    dfs(root)

    return res;
};