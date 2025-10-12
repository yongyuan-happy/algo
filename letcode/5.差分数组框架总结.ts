class Difference {
    constructor(nums) {
        // 差分数组
        this.diff = new Array(nums.length);
        // 根据初始数组构造差分数组
        this.diff[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1];
        }
    }

    // 给闭区间 [i, j] 增加 val（可以是负数）
    increment(i, j, val) {
        this.diff[i] += val;
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] -= val;
        }
    }

    // 返回结果数组
    result() {
        let res = new Array(this.diff.length);
        // 根据差分数组构造结果数组
        res[0] = this.diff[0];
        for (let i = 1; i < this.diff.length; i++) {
            res[i] = res[i - 1] + this.diff[i];
        }
        return res;
    }
}


// 1094. 拼车
var carPooling = function (trips, capacity) {
    const d = Array(1001).fill(0);
    for (const [num, from, to] of trips) {
        d[from] += num;
        d[to] -= num;
    }

    let s = 0;
    for (const v of d) {
        s += v;
        if (s > capacity) {
            return false;
        }
    }
    return true;
};
