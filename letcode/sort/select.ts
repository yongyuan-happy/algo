function selectSort(nums) { // 不推荐使用
    for (let i = 0; i < nums.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j <= nums.length - 1; j++) {
            maxIndex = nums[j] > nums[maxIndex] ? j : maxIndex;
        }
        [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
    }
    return nums;
}

// 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。

console.log(selectSort(array), array);


// 选择未排序区间的最大值放在 当前i位置上
// 相当于往已排序的区间一直push数据进去