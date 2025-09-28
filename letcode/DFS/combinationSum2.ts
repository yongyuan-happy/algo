function combinationSum2(candidates: number[], target: number): number[][] {
    // 有重复元素不可重复使用 不能重复使用路径上的值 并且同一层不能再使用相同值
    const res: number[][] = [];
    if (!candidates) return res;
    const path = [];

    // 排序
    candidates.sort((a, b) => a - b);
    let trackSum = 0;

    function backtrack(candidates: number[], start) {
        // 到达叶子结点 base case
        if (trackSum === target) {
            res.push([...path])
            return;
        }
        if (trackSum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            // 同一层不能使用相同值
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            path.push(candidates[i]);
            trackSum += candidates[i];

            backtrack(candidates, i + 1);
            trackSum -= candidates[i];

            path.pop();
        }
    }

    backtrack(candidates, 0);

    return res;
};