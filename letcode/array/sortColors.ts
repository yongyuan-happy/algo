/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    if (nums.length === 0 || nums.length == 1) {
        return;
    }
    let left = 0;
    let right = nums.length - 1;

    for (let i = 0; i <= right; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]]
            left++;
        }
        if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]]
            right--;
            // 需要注意的是从后面换过来的元素是未处理的 所以需要停一步重新处理一下当前元素
            i--;
        }
    };
};