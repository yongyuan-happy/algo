https://labuladong.online/algo/essential-technique/dynamic-programming-framework/

// 伪码框架

// # 自顶向下递归的动态规划
// def dp(状态1, 状态2, ...):
//     for 选择 in 所有可能的选择:
//         # 此时的状态已经因为做了选择而改变
//         result = 求最值(result, dp(状态1, 状态2, ...))
//     return result

function coinChangeBacktrack(coins: number[], amount: number): number {
    coins.sort((a, b) => b - a); // 大面额优先
    let res = Infinity;

    function dfs(index: number, remain: number, count: number) {
        if (remain === 0) {
            res = Math.min(res, count);
            return;
        }
        if (index === coins.length) return;

        const coin = coins[index];
        const maxUse = Math.floor(remain / coin);

        for (let k = maxUse; k >= 0 && count + k < res; k--) {
            dfs(index + 1, remain - k * coin, count + k);
        }
    }

    dfs(0, amount, 0);
    return res === Infinity ? -1 : res;
}