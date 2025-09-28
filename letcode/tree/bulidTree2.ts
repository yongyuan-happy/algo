
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    // 存储 inorder 中值到索引的映射
    var valToIndex = new Map();

    for (let i = 0; i < inorder.length; i++) {
        valToIndex.set(inorder[i], i);
    }

    return build(
        postorder, 0, postorder.length - 1,
        inorder, 0, inorder.length - 1,
    );

    // build 函数的定义：
    // 若后序遍历数组为 postorder[preStart..preEnd]，
    // 中序遍历数组为 inorder[inStart..inEnd]，
    // 构造二叉树，返回该二叉树的根节点
    function build(postorder, postStart, postEnd,
        inorder, inStart, inEnd) {

        if (postStart > postEnd) {
            return null;
        }

        // root 节点对应的值就是后序遍历数组的最后一个元素
        var rootVal = postorder[postEnd];
        // rootVal 在中序遍历数组中的索引
        var index = valToIndex.get(rootVal);

        var leftSize = index - inStart;

        // 先构造出当前根节点
        var root = new TreeNode(rootVal);

        // 递归构造左右子树
        root.left = build(postorder, postStart, postStart + leftSize - 1,
            inorder, inStart, index - 1
        );

        root.right = build(postorder, postStart + leftSize, postEnd - 1,
            inorder, index + 1, inEnd);
        return root;
    }
};