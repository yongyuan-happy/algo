// N 叉树的遍历框架
var traverse = function (root) {
    if (root === null) {
        return;
    }
    // 前序位置
    for (var i = 0; i < root.children.length; i++) {
        traverse(root.children[i]);
    }
    // 后序位置
};
