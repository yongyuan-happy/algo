function subsets(nums: number[]): number[][] {
    // 用于储存结果
    const res: number[][] = [];
    // 用于记录回溯路径
    const track: number[] = [];

    function backtrack(start) {
        res.push([...track]);

        for (let i = start; i < nums.length; i++) {

            track.push(nums[i]);

            backtrack(i + 1);

            track.pop();
        }
    }

    backtrack(0)

    return res;
};

