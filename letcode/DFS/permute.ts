// 无重复值问题不可重复使用 不能再次使用路径上的值
function permute(nums: number[]): number[][] {
    const res: number[][] = [];
    const path: number[] = [];

    if (nums.length === 0) return res;

    function backtrack(nums) {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // 剪掉了重复值
            if (path.indexOf(nums[i]) !== -1) {
                continue;
            }
            path.push(nums[i]);
            backtrack(nums)
            path.pop();
        }
    }

    backtrack(nums);

    return res;
};



// 全排列就是有重复值结果 
// 全排列2无非是剪掉同一层值相同的枝
// 要想没有重复值结果 必须让后续的排序从自身开始 或者从自己的下一个开始 就看是否可重复使用
// 用到的模版就是

// 组合/子集问题回溯算法框架
var backtrack = function (nums, start) {
    // 回溯算法标准框架
    for (var i = start; i < nums.length; i++) {
        // 做选择
        track.addLast(nums[i]);
        // 注意参数
        backtrack(nums, i + 1);
        // 撤销选择
        track.removeLast();
    }
}


// 排列问题回溯算法框架
var backtrack = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        // 剪枝逻辑
        if (used[i]) {
            continue;
        }
        // 做选择
        used[i] = true;
        track.addLast(nums[i]);

        backtrack(nums);
        // 撤销选择
        track.removeLast();
        used[i] = false;
    }
}