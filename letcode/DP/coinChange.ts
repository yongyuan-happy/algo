// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 - 1 。

// 你可以认为每种硬币的数量是无限的。


function coinChange(coins: number[], amount: number): number {
    const memo = new Array(amount + 1).fill(-666);
    return Dp(coins, amount, memo);
};

function Dp(coins: number[], amount: number, memo) {

    if (amount === 0) {
        return 0;
    }

    if (amount < 0) {
        return -1;
    }

    let count = Infinity;

    if (memo[amount] !== -666) {
        return memo[amount];
    }

    for (let i = 0; i < coins.length; i++) {

        // 计算子问题的结果
        let subProblem = Dp(coins, amount - coins[i], memo);
        // 子问题无解则跳过
        if (subProblem === -1) continue;

        count = Math.min(subProblem + 1, count);
    }

    count = count === Infinity ? -1 : count;

    memo[amount] = count;

    return count;
}