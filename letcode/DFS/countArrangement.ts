// 假设有从 1 到 n 的 n 个整数。用这些整数构造一个数组 perm（下标从 1 开始），只要满足下述条件 之一 ，该数组就是一个 优美的排列 ：

// perm[i] 能够被 i 整除
// i 能够被 perm[i] 整除
// 给你一个整数 n ，返回可以构造的 优美排列 的 数量 。
function countArrangement(n: number): number {
    if (n === 1) return n;

    let count = 0;
    const use = new Array[n + 1].fill(false);

    function bfs(digits) {
        if (digits === n) {
            count++;
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (use.includes(i)) {
                continue;
            }

            if (!(i % digits === 0 || digits % i === 0)) {
                continue;
            }

            use.push(i);
            bfs(digits + 1);
            use.pop();
        }
    }

    bfs(1)

    return count
};