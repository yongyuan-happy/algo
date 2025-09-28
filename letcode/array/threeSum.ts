function threeSum(nums: number[]): number[][] {
    const ans = [];
    nums.sort((a, b) => a - b);
    if (nums[0] > 0) return [];
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (cur === nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = cur + nums[l] + nums[r];
            if (sum === 0) {
                ans.push([cur, nums[l], nums[r]]);
                while (nums[l] === nums[l + 1]) l++;
                while (nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
            else if (sum < 0) l++;
            else if (sum > 0) r--;
        }
    }
    return ans;
}
