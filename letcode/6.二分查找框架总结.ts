function lowerBound(a: number[], x: number) {
    let l = 0, r = a.length; // [l, r)
    while (l < r) {
        const m = (l + r) >> 1;
        a[m] < x ? l = m + 1 : r = m;
    }
    return l; // 第一个 >= x 的位置
}

var binary_search = function (nums, target) {
    var left = 0, right = nums.length - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 直接返回
            return mid;
        }
    }
    // 直接返回
    return -1;
}

var left_bound = function (nums, target) {
    var left = 0, right = nums.length - 1;
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 别返回，锁定左侧边界
            right = mid - 1;
        }
    }
    // 判断 target 是否存在于 nums 中
    if (left < 0 || left >= nums.length) {
        return -1;
    }
    // 判断一下 nums[left] 是不是 target
    return nums[left] == target ? left : -1;
}

var right_bound = function (nums, target) {
    var left = 0, right = nums.length - 1;
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 别返回，锁定右侧边界
            left = mid + 1;
        }
    }
    // 由于 while 的结束条件是 right == left - 1，且现在在求右边界
    // 所以用 right 替代 left - 1 更好记
    if (right < 0 || right >= nums.length) {
        return -1;
    }
    return nums[right] == target ? right : -1;
}

// 分析二分查找的一个技巧是：不要出现 else，而是把所有情况用 else if 写清楚，这样可以清楚地展现所有细节。

// 34. 在排序数组中查找元素的第一个和最后一个位置



var searchRange = function (nums, target) {
    const start = lowerBound(nums, target);
    if (start === nums.length || nums[start] !== target) {
        return [-1, -1]; // nums 中没有 target
    }
    // 如果 start 存在，那么 end 必定存在
    const end = lowerBound(nums, target + 1) - 1;
    return [start, end];
};

// lowerBound 返回最小的满足 nums[i] >= target 的下标 i
// 如果数组为空，或者所有数都 < target，则返回 nums.length
// 要求 nums 是非递减的，即 nums[i] <= nums[i + 1]
var lowerBound = function (nums, target) {
    let left = 0, right = nums.length; // 左闭右开区间 [left, right)
    while (left < right) { // 区间不为空
        // 循环不变量：
        // nums[left-1] < target
        // nums[right] >= target
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid; // 范围缩小到 [left, mid)
        } else {
            left = mid + 1; // 范围缩小到 [mid+1, right)
        }
    }
    // 循环结束后 left = right
    // 此时 nums[left-1] < target 而 nums[left] = nums[right] >= target
    // 所以 left 就是第一个 >= target 的元素下标
    return left;
}


function lowerB(nums, target) {
    let left = 0, right = nums.length; // 左闭右开

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

// 35. 搜索插入位置
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) {
            right = mid;
        } else if (nums[mid] === target) {
            return mid;
        } else {
            // 需要加一 
            left = mid + 1;
        }
    }

    return left;
};

