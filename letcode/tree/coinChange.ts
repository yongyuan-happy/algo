function coinChange(coins: number[], amount: number): number {

    if (amount === 0) {
        return 0;
    }

    let res;
    for (let i = 0; i < coins.length; i++) {
        res = coinChange(coins, amount - coins[i]) + 1;
    }

    return coinChange(coins,)
};


