var NumArray = function (nums) {
    // 前缀和数组
    let preSum = new Array(nums.length + 1).fill(0);

    // preSum[0] = 0，便于计算累加和
    preSum[0] = 0;

    // 输入一个数组，构造前缀和
    for (let i = 1; i < preSum.length; i++) {
        // 计算 nums 的累加和
        preSum[i] = preSum[i - 1] + nums[i - 1];
    }

    this.preSum = preSum;
};

// 查询闭区间 [left, right] 的累加和
NumArray.prototype.sumRange = function (left, right) {
    return this.preSum[right + 1] - this.preSum[left];
};

var NumMatrix = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    // preSum[i][j] 记录矩阵 [0, 0, i-1, j-1] 的元素和
    this.preSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    if (m == 0 || n == 0) return;
    // 构造前缀和矩阵
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 计算每个矩阵 [0, 0, i, j] 的元素和
            this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] + matrix[i - 1][j - 1] - this.preSum[i - 1][j - 1];
        }
    }
};

NumMatrix.prototype.sumRegion = function (x1, y1, x2, y2) {
    // 计算子矩阵 [x1, y1, x2, y2] 的元素和
    // 目标矩阵之和由四个相邻矩阵运算获得
    return this.preSum[x2 + 1][y2 + 1] - this.preSum[x1][y2 + 1] - this.preSum[x2 + 1][y1] + this.preSum[x1][y1];
};

// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

function productExceptSelf(nums: number[]): number[] {
    const left = [], right = [], answer = [];
    left[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        answer[i] = left[i] * right[i];
    }

    return answer;
};

// 给定一个整数数组 nums 和一个整数 k ，返回其中元素之和可被 k 整除的非空 子数组 的数目。

// 子数组 是数组中 连续 的部分。
var subarraysDivByK = function (nums, k) {
    let len = nums.length
    let befores = [0]
    for (let i = 0; i < len; i++) {
        befores.push(befores[i] + nums[i])
    }

    let map = new Map()
    map.set(0, 1)

    for (let i = 1; i <= len; i++) {
        let mod = ((befores[i] % k) + k) % k
        if (map.has(mod)) {
            count += map.get(mod)
        }
        let c = map.has(mod) ? map.get(mod) : 0
        map.set(mod, c + 1)
    }
    return count
}
