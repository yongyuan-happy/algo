function findSubsequences(nums: number[]): number[][] {

    const res: number[][] = [];
    if (!nums.length) return res;
    const stack: number[] = []


    function backTrack(start) {

        // 每一层做一次缓存 不适用相同的数字
        const use: number[] = [];
        if (stack.length > 1) {
            res.push([...stack]);
        }
        for (let i = start; i < nums.length; i++) {
            if (nums[i] < stack[stack.length - 1] || use.includes(nums[i])) continue;
            use.push(nums[i]);
            stack.push(nums[i]);
            backTrack(i + 1);
            stack.pop();
        }
    }

    backTrack(0);
    return res;
};