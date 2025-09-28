// 常用小数组开销 平均/最差O(n^2) 原地排序 最好 O(N)
// 1) 交换式的简单实现（你当前的实现，直观但每次插入可能做多次交换）
function insertSort(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        for (let j = i; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            } else {
                break;
            }
        }
    }
    return nums;
}

// 2) 移位式（更常用、更高效）：保存当前值，用后移腾位置，写入次数少于不断交换
function insertSortShift(nums: number[]): number[] { //对于少量元素的排序，它是一个有效、简单的算法
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        // 拿到要排序的值
        const cur = nums[i];
        let j = i - 1;
        // 将大于 cur 的元素右移一位
        while (j >= 0 && nums[j] > cur) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = cur; // 插入到j后面一位位置
    }
    return nums;
}


// 优化版：二分插入（减少比较次数，移动次数不变）
function insertSortOptimized(nums: number[]): number[] {
    if (nums.length <= 1) return nums;
    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        let left = 0, right = i - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] <= current) left = mid + 1;
            else right = mid - 1;
        }
        for (let j = i; j > left; j--) nums[j] = nums[j - 1];
        nums[left] = current;
    }
    return nums;
}

function quick(nums: number[]) {
    if (nums.length <= 1) {
        return nums;
    }

    const pivot = nums[Math.floor(Math.random() * nums.length)];
    const left: number[] = [];
    const right: number[] = [];
    const equal: number[] = [];


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else if (nums[i] > pivot) {
            right.push(nums[i]);
        } else {
            equal.push(nums[i]);
        }
    }

    return [...quick(left), ...equal, ...quick(right)];
}