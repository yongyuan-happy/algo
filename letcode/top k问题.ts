// 前top k值
function topK(nums, k) {
    const heap = [];

    for (const num of nums) {
        if (heap.length < k) {
            heap.push(num);
            heap.sort((a, b) => a - b); // 保持小顶堆
        } else if (num > heap[0]) {
            heap[0] = num;
            heap.sort((a, b) => a - b);
        }
    }

    return heap;
}

// 347. 前 K 个高频元素
function topKFrequent(nums: number[], k: number): number[] {
    const countMap: Map<number, number> = new Map();
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    // tS没有最小堆的数据结构，所以直接对整个数组进行排序，取前k个元素
    return [...countMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(i => i[0]);
};


function topKFrequent(nums: number[], k: number): number[] {
    const countMap: Map<number, number> = new Map();

    // 1️⃣ 统计频率
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // 2️⃣ 构建最小堆（堆中最多保留 k 个最高频元素）
    const heap: [number, number][] = []; // [num, freq]

    const pushHeap = (item: [number, number]) => {
        heap.push(item);
        heapifyUp(heap);
    };

    const popHeap = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0 && last) {
            heap[0] = last;
            heapifyDown(heap);
        }
        return top;
    };

    // 上浮操作
    function heapifyUp(heap: [number, number][]) {
        let index = heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (heap[parent][1] <= heap[index][1]) break;
            [heap[parent], heap[index]] = [heap[index], heap[parent]];
            index = parent;
        }
    }

    // 下沉操作
    function heapifyDown(heap: [number, number][]) {
        let index = 0;
        const length = heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && heap[left][1] < heap[smallest][1]) smallest = left;
            if (right < length && heap[right][1] < heap[smallest][1]) smallest = right;

            if (smallest === index) break;
            [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
            index = smallest;
        }
    }

    // 3️⃣ 遍历频率表
    for (const [num, freq] of countMap.entries()) {
        if (heap.length < k) {
            pushHeap([num, freq]);
        } else if (freq > heap[0][1]) {
            popHeap();
            pushHeap([num, freq]);
        }
    }

    // 4️⃣ 输出结果
    return heap.map(i => i[0]);
}
