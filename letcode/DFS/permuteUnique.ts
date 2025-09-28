// 有重复元素不可重复使用 不能重复使用路径上的值 并且同一层不能再使用相同值
function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = [];
    if (!nums) return res;
    const path = [];
    const use = new Array(nums.length).fill(false);
    // 排序
    nums.sort((a, b) => a - b);

    function backtrack(nums: number[]) {
        // 到达叶子结点 base case
        if (path.length === nums.length) {
            res.push([...path])
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // 同一层不能使用相同值
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            if (use[i]) {
                continue;
            }
            path.push(nums[i]);
            use[i] = true;
            backtrack(nums);
            use[i] = false;
            path.pop();
        }
    }

    backtrack(nums);


    return res;
};


