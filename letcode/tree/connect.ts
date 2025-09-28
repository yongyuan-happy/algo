/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 * 
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function connect(root: _Node | null): _Node | null {
    if (!root) return root;
    root.next = null;

    backtrack(root.left, root.right);

    function backtrack(leftNode, rightNode) {
        const back = [];
        back.filter

        backtrack(leftNode.left, leftNode.right);
        backtrack(leftNode.right, rightNode.left);
        backtrack(rightNode.left, rightNode.right);
    }


    return root;
};