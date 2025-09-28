function connect(root: _Node | null): _Node | null {
    if (root == null) {
        return null;
    }

    traverse(root.left, root.right);
    return root;
};

function traverse(node1, node2) {
    if (node1 == null || node2 == null) return;

    node1.next = node2;

    traverse(node1.left, node1.right);
    traverse(node2.left, node2.right);
    traverse(node1.right, node2.left);
}