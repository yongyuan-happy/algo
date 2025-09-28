

// 迭代遍历数组  1->2->3->4
var traverse = function (arr) {
    for (var i = 0; i < arr.length; i++) {

    }
}
// 递归遍历数组
//   1
//   |
//   v  
//   2
//   |
//   v
//   3 
var traverseRecursive = function (arr, i) {
    if (i == arr.length) {
        return;
    }
    // 前序位置
    traverseRecursive(arr, i + 1);
    // 后序位置
}


// 迭代遍历单链表  1->2->3->4
var traverseList = function (head) {
    for (var p = head; p != null; p = p.next) {

    }
}

// 递归遍历单链表
//   1
//   |
//   v  
//   2
//   |
//   v
//   3 
var traverseListRecursive = function (head) {
    if (head == null) {
        return;
    }
    // 前序位置
    traverseListRecursive(head.next);
    // 后序位置
}

// DFS 算法属于遍历的思路，它的关注点在单个「节点」。
// BFS 算法属于遍历的思路，它的关注点在单个「节点」。
// 动态规划算法属于分解问题（分治）的思路，它的关注点在整棵「子树」。
// 回溯算法属于遍历的思路，它的关注点在节点间的「树枝」。


// 二叉树的DFS (前序 中序 后序 迭代版)
var traverse = function (root) {
    if (root === null) {
        return;
    }
    // 前序位置 代表刚进入这个节点
    traverse(root.left);
    // 中序位置
    traverse(root.right);
    // 后序位置 准备离开这个节点
};
{

    function preorderTraversal(root: TreeNode | null): number[] {
        const res: number[] = [];
        if (!root) return res;

        const stack: TreeNode[] = [root];

        while (stack.length > 0) {
            const node = stack.pop()!;
            res.push(node.val);

            // 先右再左，保证左子树先出栈
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }

        return res;
    }


    function inorderTraversal(root: TreeNode | null): number[] {
        const res: number[] = [];
        const stack: TreeNode[] = [];
        let cur: TreeNode | null = root;

        while (cur !== null || stack.length > 0) {
            // 关键点1：一直往左走到底
            while (cur !== null) {
                stack.push(cur);
                cur = cur.left;
            }

            // 关键点2：弹出栈顶（当前子树根节点）
            cur = stack.pop()!;
            res.push(cur.val); // 访问根节点

            // 关键点3：转向右子树
            cur = cur.right;
        }

        return res;
    }

    function postorderTraversal(root: TreeNode | null): number[] {
        const res: number[] = [];
        if (!root) return res;

        const stack: TreeNode[] = [root];

        while (stack.length > 0) {
            const node = stack.pop()!;
            res.push(node.val);

            // 先左后右（保证出栈顺序为右后左，从而得到 Root-Right-Left）
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }

        return res.reverse();
    }

}

// 二叉树的BFS （迭代版）
function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;

    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const size = queue.length;
        const level: number[] = [];

        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        res.push(level);
    }
    return res;
}
{
    function levelOrder(root: TreeNode | null): number[][] {
        const res: number[][] = [];

        function bfs(nodes: (TreeNode | null)[]) {
            if (nodes.length === 0) return;

            const nextLevel: (TreeNode | null)[] = [];
            const levelVals: number[] = [];

            for (const node of nodes) {
                if (!node) continue;
                levelVals.push(node.val);
                if (node.left) nextLevel.push(node.left);
                if (node.right) nextLevel.push(node.right);
            }

            if (levelVals.length > 0) {
                res.push(levelVals);
            }

            bfs(nextLevel);
        }

        bfs([root]);
        return res;
    }

}

// DFS 算法把「做选择」「撤销选择」的逻辑放在 for 循环外面 个人理解为DFS不需要剪枝动作 做到递归即可
var dfs = function (root) {
    if (root == null) return;
    // 做选择
    console.log("enter node %s", root);
    for (var i = 0; i < root.children.length; i++) {
        dfs(root.children[i]);
    }
    // 撤销选择
    console.log("leave node %s", root);
}

// 回溯算法框架
void backtrack(...) {
    // base case
    if (...) return;

    for (int i = 0; i < ...; i++) {
        // 做选择
        // 剪枝处理 永远聚焦于枝条 而不是节点
        ...

        // 进入下一层决策树
        backtrack(...);

        // 撤销刚才做的选择
        ...
    }
}

// 伪码框架

// # 自顶向下递归的动态规划
// def dp(状态1, 状态2, ...):
//     for 选择 in 所有可能的选择:
//         # 此时的状态已经因为做了选择而改变
//         result = 求最值(result, dp(状态1, 状态2, ...))
//     return result

function coinChangeBacktrack(coins: number[], amount: number): number {
    coins.sort((a, b) => b - a); // 大面额优先
    let res = Infinity;

    function dfs(index: number, remain: number, count: number) {
        if (remain === 0) {
            res = Math.min(res, count);
            return;
        }
        if (index === coins.length) return;

        const coin = coins[index];
        const maxUse = Math.floor(remain / coin);

        for (let k = maxUse; k >= 0 && count + k < res; k--) {
            dfs(index + 1, remain - k * coin, count + k);
        }
    }

    dfs(0, amount, 0);
    return res === Infinity ? -1 : res;
}
