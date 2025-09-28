function minSubArrayLen(target: number, nums: number[]): number {

    // 左闭右开的区间
    let slow = 0;
    let fast = 0;

    let length = Infinity;
    let acc = 0;

    while (fast <= nums.length) {
        if (acc >= target) {
            length = Math.min((fast - slow), length);
            acc = acc - nums[slow];
            slow++;
        } else {
            fast++;
            acc = nums[fast - 1] + acc;
        }
    }

    return length === Infinity ? 0 : length;
};

// function minSubArrayLen(t: number, nums: number[]): number {
//     let n = nums.length, ans = n + 10;
//     const sum = new Array(n + 10).fill(0);
//     for (let i = 1; i <= n; i++) sum[i] = sum[i - 1] + nums[i - 1];
//     for (let i = 1; i <= n; i++) {
//         const d = sum[i] - t;
//         let l = 0, r = i;
//         while (l < r) {
//             const mid = l + r + 1 >> 1;
//             if (sum[mid] <= d) l = mid;
//             else r = mid - 1;
//         }
//         if (sum[r] <= d) ans = Math.min(ans, i - r);
//     }
//     return ans == n + 10 ? 0 : ans;
// };