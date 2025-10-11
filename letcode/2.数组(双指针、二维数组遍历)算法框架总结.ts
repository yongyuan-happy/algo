https://leetcode.cn/problems/rotate-image/ 花式翻转二维数组
https://leetcode.cn/problems/spiral-matrix/description/ // 螺旋矩阵

// 数组中矩阵要格外提防 难者不会 会者不难。

// 167. 两数之和 II - 输入有序数组

// 双指针 判断是否大于或小于target 根据两数之和来判断是应该向左移动还是向右移动
function twoSum(price: number[], target: number): number[] {
    let l = 0, r = price.length - 1;

    while (l < r) {
        const current = price[l] + price[r];
        if (current > target) r--;
        else if (current < target) l++;
        else return [price[l], price[r]];
    }
    return [];
};

// 26. 删除有序数组中的重复项
// 双指针 两个数相等快指针向前一步 慢指针不动
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let slow = 0, fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            // 维护 nums[0..slow] 无重复
            nums[slow] = nums[fast];
        }
        fast++;
    }
    // 数组长度为索引 + 1
    return slow + 1;
};


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
