function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    let N = Math.trunc(n); // 确保整数
    let ans = 1;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    while (N > 0) {
        if (N % 2 === 1) ans *= x;
        x *= x;
        N = Math.floor(N / 2);
    }
    return ans;
} 