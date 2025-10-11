// 494. 目标和

// 暴力破解回溯法
var findTargetSumWays = function (nums, target) {
    // 目标总和
    let accNum = 0;
    // 数组长度
    const len = nums.length;
    // 满足数量
    let res = 0;

    function backtrace(depth) {
        // 所有数组元素全部用上并且刚好等于目标数
        if (depth === len && accNum === target) {
            res++;
            return;
        }

        // 超过数组长度
        if (depth >= len) {
            return;
        }

        // 选减号
        accNum -= nums[depth];
        backtrace(depth + 1);
        accNum += nums[depth];

        // 选加号
        accNum += nums[depth];
        backtrace(depth + 1);
        accNum -= nums[depth];
    }

    backtrace(0);

    return res;
};

// 动态规划 我理解在暴力破解的过程中 如果出现多个相同子问题的情况 可以利用动态规划消除重复子问题的方法来加速
var findTargetSumWays = function (nums, target) {
    if (nums.length === 0) return 0;
    // 备忘录
    const memo = new Map();
    return dp(nums, 0, target);


    // 定义：利用 nums[i..] 这些元素，能够组成和为 remain 的方法数量
    function dp(nums, i, remain) {
        // base case
        if (i === nums.length) {
            if (remain === 0) return 1;
            return 0;
        }

        // 把它俺转成字符串才能作为哈希表的键
        const key = `${i},${remain}`;

        // 避免重复计算
        if (memo.has(key)) {
            return memo.get(key);
        }

        // 还是穷举
        const result = dp(nums, i + 1, remain - nums[i]) + dp(nums, i + 1, remain + nums[i]);

        // 记入备忘录
        memo.set(key, result);
        return result;
    }
};


// 104. 二叉树的最大深度

// 遍历的思路
var maxDepth = function(root) {
    // 记录遍历到的节点的深度
    let depth = 0;
    // 记录最大深度
    let res = 0;

    // 遍历二叉树
    var traverse = function(node) {
        if (node === null) {
            return;
        }

        // 前序遍历位置（进入节点）增加深度
        depth++;
        // 遍历到叶子节点时记录最大深度
        if (node.left === null && node.right === null) {
            res = Math.max(res, depth);
        }
        traverse(node.left);
        traverse(node.right);

        // 后序遍历位置（离开节点）减少深度
        depth--;
    };

    traverse(root);
    return res;
};


// 分解问题的思路
// 定义：输入一个节点，返回以该节点为根的二叉树的最大深度
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    // 利用定义，计算左右子树的最大深度
    var leftMax = maxDepth(root.left);
    var rightMax = maxDepth(root.right);
    
    // 根据左右子树的最大深度推出原二叉树的最大深度
    // 整棵树的最大深度等于左右子树的最大深度取最大值，
    // 然后再加上根节点自己
    return 1 + Math.max(leftMax, rightMax);
};