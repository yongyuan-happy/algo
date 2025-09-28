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

// 不管怎样递归都会符合递归序这就是递归的规律
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null || root === p || root === q) {
        return root; // 找到 p 或 q 就不往下递归了，原因见上面答疑
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) { // 左右都找到
        return root; // 当前节点是最近公共祖先
    }
    // 如果只有左子树找到，就返回左子树的返回值
    // 如果只有右子树找到，就返回右子树的返回值
    // 如果左右子树都没有找到，就返回 null（注意此时 right = null）
    return left ?? right;
};