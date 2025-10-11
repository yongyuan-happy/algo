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