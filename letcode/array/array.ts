// // 二分查找 

// // 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


// // 示例 1:

// // 输入: nums = [-1,0,3,5,9,12], target = 9
// // 输出: 4
// // 解释: 9 出现在 nums 中并且下标为 4
// // 示例 2:

// // 输入: nums = [-1,0,3,5,9,12], target = 2
// // 输出: -1
// // 解释: 2 不存在 nums 中因此返回 -1

// // 提示：
// // 你可以假设 nums 中的所有元素是不重复的。
// // n 将在 [1, 10000]之间。
// // nums 的每个元素都将在 [-9999, 9999]之间。


// // function search(nums: number[], target: number): number {
// //     let arrLength = -1;
// //     nums.forEach((i, index) => {
// //         if (i === target) {
// //             arrLength = index;
// //         }¡
// //     })
// //     return arrLength;
// // };
// function search(nums: number[], target: number): number {
//     const midElementIndex = nums.length / 2;
//     if (nums[midElementIndex] === target) {
//         return midElementIndex;
//     } else if (nums[midElementIndex] < target) {
//         return search(nums.slice(midElementIndex + 1), target);
//     } else if (nums[midElementIndex] > target) {
//         return search(nums.slice(0, midElementIndex), target);
//     }
//     return -1;
// };


// var longestConsecutive = function (nums: number[]): number {
//     let num_set: Set<number> = new Set();
//     for (const num of nums) {
//         num_set.add(num); // 变为set集合 搜索性能增强           

//     }

//     let longestStreak = 0;

//     for (const num of num_set) {
//         if (!num_set.has(num - 1)) { // 在双重循环的内循环之前增加循环条件
//             let currentNum = num;
//             let currentStreak = 1;

//             while (num_set.has(currentNum + 1)) {
//                 currentNum += 1;
//                 currentStreak += 1;
//             }

//             longestStreak = Math.max(longestStreak, currentStreak); // 取两个最大值
//         }
//     }

//     return longestStreak;
// };


// function decodeString(s: string): string {
//     const stack: string[] = [];
//     for (let i of s) {
//         if (i !== ']') {
//             stack.push(i);
//             continue;
//         }
//         let restring = '';
//         while (stack.at(-1) !== '[') {
//             restring = stack.pop() + restring;
//         }
//         stack.pop();
//         let renumber = '';
//         while (/\d/.test(stack.at(-1)!)) {
//             renumber = stack.pop() + renumber;
//         }
//         let reps = Number(renumber);
//         let resM = '';
//         while (reps) {
//             resM += restring;
//             reps--;
//         }
//         stack.push(resM);
//     }
//     return stack.join('');
// }




// class RecentCounter {
//     queue: number[] = [];

//     ping(t: number): number {
//         let times = 0;
//         this.queue.push(t);
//         for (let i of this.queue) {
//             if (i >= t - 3000) {
//                 times++;
//             }
//         }
//         return times;
//     }
//     // ping(){

//     // }
// }



// function isSubsequence(s: string, t: string): boolean {
//     let index = 0;
//     for (const element of s) {
//         if (t.indexOf(element, index) === -1) {
//             return false;
//         }
//         index = t.indexOf(element)
//     }
//     return true;
// };


// function twoSum(numbers: number[], target: number): number[] {
//     for (let index = 0; index < numbers.length; index++) {
//         const element = numbers[index];
//         const findNumber = target - element;
//         if (numbers.indexOf(findNumber, index + 1) !== -1) {
//             return [index, numbers.indexOf(findNumber, index + 1)]
//         }
//     }
// };

// function twoSum(numbers, target) {
//     let i = 0, j = numbers.length - 1;
//     while (i < j) {
//         if (numbers[i] + numbers[j] === target) {
//             return [i, j]
//         } else if (numbers[i] + numbers[j] < target) {
//             i++
//         } else {
//             j--
//         }
//     }
//     return [];
// }


// function trap(height) {
//     let leftIndex = 0, rightIndex = height.length - 1;
//     let leftMax = 0, rightMax = 0;
//     let are = 0;
//     while (leftIndex < rightIndex) {
//         leftMax = Math.max(leftMax, height[leftIndex]);
//         rightMax = Math.max(rightMax, height[rightIndex]);

//         if (height[rightIndex] > height[leftIndex]) {
//             are = are + leftMax - height[leftIndex];
//             leftIndex++;
//         } else {
//             are = are + rightMax - height[rightIndex];
//             rightIndex--;
//         }
//     }
//     return are;
// };

function trap(height) {
    let ans = 0;
    for (let index = 0; index < height.length; index++) {
        const element = height[index];
        let leftMax = 0, rightMax = 0;

        for (let i = 0; i < height.length; i++) {
            const ele = height[i];
            if (i < index) {
                leftMax = Math.max(leftMax, ele);
            }
            if (i > index) {
                rightMax = Math.max(rightMax, ele);
            }
        }

        if (element < leftMax && element < rightMax) {
            if (leftMax < rightMax) {
                ans = ans + (leftMax - element);
            } else {
                ans = ans + (rightMax - element);
            }
        }
    }

    return ans;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))


function uniquePaths(m: number, n: number): number {
    const uArray = new Array(m).fill(1).map(() => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            uArray[i][j] = uArray[m][n - 1] + uArray[m - 1] + [n];
        }
    }
    return uArray[m - 1][n - 2] + uArray[m - 2] + [n - 1];
};

function lengthOfLIS(nums: number[]): number {
    const arr: number[] = [];
    for (const i of nums) {
        if (nums.length === 0 || i > arr.at(-1)!) {
            arr.push(i);
        } else {
            const index = arr.findIndex((m) => i >= m);
            arr[index] = i;
        }
    }
    return arr.length;
}

function coinChange(coins: number[], amount: number): number {
    let newCoins = coins.sort((a, b) => b - a);
    let index = newCoins.findIndex((m) => m <= amount);
    let num = 0;
    while (index < coins.length) {
        if (amount - coins[index] > 0) {
            amount = amount - coins[index]
            num++;
            continue;
        } else if (amount - coins[index] === 0) {
            index = coins.length;
            num++;
            return num;
        } else {
            index++
        }
    }
    return -1;
};

function findO(nums) {
    const nap = new Map();
    for (const i of nums) {
        if (nap.has(i)) {
            nap.set(i, nap.get(i) + 1)
        } else {
            nap.set(i, 1)
        }
    }
    for (const [i, m] of nap.entries()) {
        if (m % 2 === 1) {
            return i;
        }
    }
}

function rotate(nums: number[], k: number): void {
    const cutA = nums.splice(0, nums.length - k);
    cutA.forEach(i => nums.push(i));
};


// [3,2,1,0,4]
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const res = [];
    let ciol = 0;
    let min = Infinity;
    for (let i = 0; i < gas.length; i++) {
        res[i] = gas[i] - cost[i];
    }
    for (let i = 0; i < res.length; i++) {
        ciol += res[i]
        min = Math.min(res[i], min);
    }
    if (ciol >= 0) {
        return res.indexOf(min) + 1;
    }
    return -1;
};