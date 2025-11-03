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

function pruneTree(root: TreeNode | null): TreeNode | null {

    function dfs(root) {


        if (!root) return 0;


        const left = dfs(root.left);
        const right = dfs(root.right);

        if (left !== 1) {
            root.left = null;
        }

        if (right !== 1) {
            root.right = null;
        }

        return (left || right || root.val) ? 1 : 0;
    }

    return dfs(root) === 0 ? null : root;

};