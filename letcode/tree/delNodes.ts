// 定义TreeNode类型
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const res: Array<TreeNode | null> = [];
    if (!root) return res;
    
    const toDeleteSet = new Set(to_delete);
    
    // 递归函数，返回处理后的节点
    function traverse(node: TreeNode | null): TreeNode | null {
        if (!node) return null;
        
        // 递归处理左右子树
        node.left = traverse(node.left);
        node.right = traverse(node.right);
        
        // 如果当前节点需要删除
        if (toDeleteSet.has(node.val)) {
            // 将左右子节点（如果存在且不需要删除）添加到结果中
            if (node.left && !toDeleteSet.has(node.left.val)) {
                res.push(node.left);
            }
            if (node.right && !toDeleteSet.has(node.right.val)) {
                res.push(node.right);
            }
            // 返回null表示删除当前节点
            return null;
        }
        
        // 如果当前节点不需要删除，直接返回
        return node;
    }
    
    // 处理根节点
    const newRoot = traverse(root);
    
    // 如果根节点没有被删除，将其添加到结果中
    if (newRoot) {
        res.push(newRoot);
    }
    
    return res;
}