function flatten(root: TreeNode | null): void {
    if (!root) return;

    recursioin(root);
};


function recursioin(root) {
    if (!root) return root;

    const left = recursioin(root.left);
    const right = recursioin(root.right);

    left.next = right;
    root.right = null;

    return right;
}