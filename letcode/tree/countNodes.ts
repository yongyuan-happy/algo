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

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    const queue = [root];
    let ans = 0;
    while (queue.length !== 0) {
        const size = queue.length;
        ans += size;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }

    return ans;
};