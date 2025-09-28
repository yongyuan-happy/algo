class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 插入元素
    insert(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    // 弹出堆顶
    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._sinkDown();
        }
        return min;
    }

    _bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }


    // 上移操作
    // shiftUp(index) {
    //     if (index === 0) { return }
    //     const parentIndex = this.getParentIndex(index)
    //     if (this.heap[parentIndex] > this.heap[index]) {
    //         this.swap(parentIndex, index)
    //         this.shiftUp(parentIndex)
    //     }
    // }

    _sinkDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let swap = null;

            if (left < length && this.heap[left] < element) {
                swap = left;
            }
            if (right < length && this.heap[right] < (swap === null ? element : this.heap[left])) {
                swap = right;
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }

    // 下移操作
    // shiftDown(index) {
    //     const leftIndex = this.getLeftIndex(index)
    //     const rightIndex = this.getRightIndex(index)
    //     if (this.heap[leftIndex] < this.heap[index]) {
    //         this.swap(leftIndex, index)
    //         this.shiftDown(leftIndex)
    //     }
    //     if (this.heap[rightIndex] < this.heap[index]) {
    //         this.swap(rightIndex, index)
    //         this.shiftDown(rightIndex)
    //     }
    // }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

// 使用示例：找数组前 K 大
function topK(arr, k) {
    const heap = new MinHeap();
    for (let num of arr) {
        if (heap.size() < k) {
            heap.insert(num);
        } else if (num > heap.peek()) {
            heap.extractMin();
            heap.insert(num);
        }
    }
    return heap.heap;
}

console.log(topK([3, 1, 5, 12, 2, 11], 3)); // 可能输出 [11,12,5]



// TOPK问题


function BinarySearch(arr, target) {
    if (arr.length <= 1) return -1
    // 低位下标
    let lowIndex = 0
    // 高位下标
    let highIndex = arr.length - 1

    while (lowIndex <= highIndex) {
        // 中间下标
        const midIndex = Math.floor((lowIndex + highIndex) / 2)
        if (target < arr[midIndex]) {
            highIndex = midIndex - 1
        } else if (target > arr[midIndex]) {
            lowIndex = midIndex + 1
        } else {
            // target === arr[midIndex]
            return midIndex
        }
    }
    return -1
}

function BinarySearchFirst(arr, target) {
    if (arr.length <= 1) return -1
    // 低位下标
    let lowIndex = 0
    // 高位下标
    let highIndex = arr.length - 1

    while (lowIndex <= highIndex) {
        // 中间下标
        const midIndex = Math.floor((lowIndex + highIndex) / 2)
        if (target < arr[midIndex]) {
            highIndex = midIndex - 1
        } else if (target > arr[midIndex]) {
            lowIndex = midIndex + 1
        } else {
            // 当 target 与 arr[midIndex] 相等的时候，如果 midIndex 为0或者前一个数比 target 小那么就找到了第一个等于给定值的元素，直接返回
            if (midIndex === 0 || arr[midIndex - 1] < target) return midIndex
            // 否则高位下标为中间下标减1，继续查找
            highIndex = midIndex - 1
        }
    }
    return -1
}
