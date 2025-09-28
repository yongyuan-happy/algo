
// 无重复值 可重复使用 
function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const path: number[] = [];
    let trackSum = 0;

    function backtrack(candidates, target, start) {
        if (trackSum === target) {
            res.push([...path])
            return;
        }
        if (trackSum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            trackSum += candidates[i];
            // 剪掉了之前值的分支 因为可以重复使用之后每个值就不需要之前的值了 能和之前的值匹配出结果 那在之前的分支就应该有结果了
            // 排除了重复项
            backtrack(candidates, target, i)
            trackSum -= candidates[i];
            path.pop();
        }
    }

    backtrack(candidates, target, 0)

    return res;
};

// 有无重复值 就用这个剪掉相同分支
// // 同一层不能使用相同值
// if (i > start && candidates[i] === candidates[i - 1]) {
//     continue;
// }
