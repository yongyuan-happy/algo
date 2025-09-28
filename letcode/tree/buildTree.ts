function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) {
        return null;
    }

    const dummy = new TreeNode(preorder[0]);

    if (preorder.length === 1) {
        return dummy;
    }

    const rootVal = preorder[0];
    const rootIndex = inorder.indexOf(rootVal);

    dummy.left = buildTree(preorder.slice(1, 1 + inorder.slice(0, rootIndex).length), inorder.slice(0, rootIndex));
    dummy.right = buildTree(preorder.slice(1 + inorder.slice(0, rootIndex).length), inorder.slice(rootIndex + 1));

    return dummy;
};

function findRootIndex(preorder: number[], inorder: number[]) {

}