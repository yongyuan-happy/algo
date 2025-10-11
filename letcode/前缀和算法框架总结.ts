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