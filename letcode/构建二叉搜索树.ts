// 搜索二叉树中序遍历为升序
function isValidBST(root: TreeNode | null): boolean {
    return _isValidBST(root, null, null);
};


function _isValidBST(root: TreeNode, min: TreeNode | null, max: TreeNode | null): boolean {
    if (!root) return true;

    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;


    return _isValidBST(root.left, min, root) && _isValidBST(root.right, root, null);
}