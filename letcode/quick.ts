/**
 * 快速排序算法
 * 时间复杂度: O(n log n) - 平均情况，O(n²) - 最坏情况
 * 空间复杂度: O(log n) - 平均情况，O(n) - 最坏情况
 * 稳定性: 不稳定排序
 */

// 标准快速排序 - 使用第一个元素作为基准
function quickSort(nums: number[]): number[] {
    if (nums.length <= 1) return nums;

    const pivot = nums[Math.floor(Math.random() * nums.length)]
    const left: number[] = [];
    const right: number[] = [];
    const equal: number[] = [];

    for (const num of nums) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

var sort = function (nums, lo, hi) {
    if (lo >= hi) {
        return;
    }
    // ****** 前序位置 ******
    // 对 nums[lo..hi] 进行切分，将 nums[p] 排好序
    // 使得 nums[lo..p-1] <= nums[p] < nums[p+1..hi]
    var p = partition(nums, lo, hi);

    // 去左右子数组进行切分
    sort(nums, lo, p - 1);
    sort(nums, p + 1, hi);
};


// 原地快速排序 - 使用Lomuto分区方案
function quickSortInPlace(nums: number[]): number[] {
    if (nums.length <= 1) return nums;

    const partition = (low: number, high: number): number => {
        const pivot = nums[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (nums[j] <= pivot) {
                i++;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
        return i + 1;
    };

    const quickSortHelper = (low: number, high: number) => {
        if (low < high) {
            const pivotIndex = partition(low, high);
            quickSortHelper(low, pivotIndex - 1);
            quickSortHelper(pivotIndex + 1, high);
        }
    };

    quickSortHelper(0, nums.length - 1);
    return nums;
}

// 优化版快速排序 - 使用三数取中法选择基准
function quickSortOptimized(nums: number[]): number[] {
    if (nums.length <= 1) return nums;

    // 三数取中法选择基准
    const medianOfThree = (low: number, high: number): number => {
        const mid = Math.floor((low + high) / 2);
        const a = nums[low];
        const b = nums[mid];
        const c = nums[high];

        if (a <= b && b <= c) return mid;
        if (a <= c && c <= b) return high;
        if (b <= a && a <= c) return low;
        if (b <= c && c <= a) return high;
        if (c <= a && a <= b) return low;
        return mid;
    };

    const partition = (low: number, high: number): number => {
        // 使用三数取中法选择基准
        const pivotIndex = medianOfThree(low, high);
        [nums[pivotIndex], nums[high]] = [nums[high], nums[pivotIndex]];

        const pivot = nums[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (nums[j] <= pivot) {
                i++;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
        return i + 1;
    };

    const quickSortHelper = (low: number, high: number) => {
        if (low < high) {
            const pivotIndex = partition(low, high);
            quickSortHelper(low, pivotIndex - 1);
            quickSortHelper(pivotIndex + 1, high);
        }
    };

    quickSortHelper(0, nums.length - 1);
    return nums;
}

// 双指针快速排序 - 使用Hoare分区方案
function quickSortHoare(nums: number[]): number[] {
    if (nums.length <= 1) return nums;

    const partition = (low: number, high: number): number => {
        const pivot = nums[low];
        let i = low - 1;
        let j = high + 1;

        while (true) {
            do {
                i++;
            } while (nums[i] < pivot);

            do {
                j--;
            } while (nums[j] > pivot);

            if (i >= j) return j;

            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    };

    const quickSortHelper = (low: number, high: number) => {
        if (low < high) {
            const pivotIndex = partition(low, high);
            quickSortHelper(low, pivotIndex);
            quickSortHelper(pivotIndex + 1, high);
        }
    };

    quickSortHelper(0, nums.length - 1);
    return nums;
}

// 测试用例
const testCases = [
    [64, 34, 25, 12, 22, 11, 90],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1],
    [],
    [3, 1, 4, 1, 5, 9, 2, 6],
    [1, 1, 1, 1, 1],
    [5, 5, 5, 5, 5]
];

console.log("=== 标准快速排序测试 ===");
testCases.forEach((arr, index) => {
    const original = [...arr];
    const sorted = quickSort([...arr]);
    console.log(`测试 ${index + 1}: [${original}] -> [${sorted}]`);
});

console.log("\n=== 原地快速排序测试 ===");
testCases.forEach((arr, index) => {
    const original = [...arr];
    const sorted = quickSortInPlace([...arr]);
    console.log(`测试 ${index + 1}: [${original}] -> [${sorted}]`);
});

console.log("\n=== 优化快速排序测试 ===");
testCases.forEach((arr, index) => {
    const original = [...arr];
    const sorted = quickSortOptimized([...arr]);
    console.log(`测试 ${index + 1}: [${original}] -> [${sorted}]`);
});

console.log("\n=== Hoare分区快速排序测试 ===");
testCases.forEach((arr, index) => {
    const original = [...arr];
    const sorted = quickSortHoare([...arr]);
    console.log(`测试 ${index + 1}: [${original}] -> [${sorted}]`);
});

// 性能测试
const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
console.log("\n=== 性能测试 ===");
console.log("数组长度:", largeArray.length);

const start1 = Date.now();
quickSort([...largeArray]);
const end1 = Date.now();
console.log(`标准快速排序耗时: ${(end1 - start1)}ms`);

const start2 = Date.now();
quickSortInPlace([...largeArray]);
const end2 = Date.now();
console.log(`原地快速排序耗时: ${(end2 - start2)}ms`);

const start3 = Date.now();
quickSortOptimized([...largeArray]);
const end3 = Date.now();
console.log(`优化快速排序耗时: ${(end3 - start3)}ms`);

const start4 = Date.now();
quickSortHoare([...largeArray]);
const end4 = Date.now();
console.log(`Hoare分区快速排序耗时: ${(end4 - start4)}ms`);
