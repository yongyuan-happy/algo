// 核心思想左闭右开

// 具体用法在双端队列中



class CycleArray {
    size;
    arr;
    start;
    end;
    count

    constructor(size = 1) {
        this.size = size;
        this.arr = new Array(size);
        // start 指向第一个有效元素的索引，闭区间
        this.start = 0;
        // 切记 end 是一个开区间，
        // 即 end 指向最后一个有效元素的下一个位置索引
        this.end = 0;
        this.count = 0;
    }


    resize(newSize) {
        // 创建新的数组
        let newArr = new Array(newSize);
        // 将旧数组的元素复制到新数组中
        for (let i = 0; i < this.count; i++) {
            newArr[i] = this.arr[(this.start + i) % this.size];
        }
        this.arr = newArr;
        // 重置 start 和 end 指针
        this.start = 0;
        this.end = this.count;
        this.size = newSize;
        

    }

    addFirst(val) {
        if (this.isFull()) {
            this.resize(this.size * 2)
        }
        // 因为 start 是闭区间，所以先左移，再赋值
        this.start = (this.start - 1 + this.size) % this.size;
        this.arr[this.start] = val;
        this.count++;


    }

    removeFirst() {
        if (this.isEmpty()) {
            throw new Error("Array is empty");
        }
        // 因为 start 是闭区间，所以先赋值，再右移
        this.arr[this.start] = null;
        this.start = (this.start + 1) % this.size;
        this.count--;
        // 如果数组元素数量减少到原大小的四分之一，则减小数组大小为一半
        if (this.count > 0 && this.count == this.size / 4) {
            this.resize(this.size / 2);
        }
    }


    // 在数组尾部添加元素，时间复杂度 O(1)
    addLast(val) {
        if (this.isFull()) {
            this.resize(this.size * 2);
        }
        // 因为 end 是开区间，所以是先赋值，再右移
        this.arr[this.end] = val;
        this.end = (this.end + 1) % this.size;
        this.count++;
    }

    removeLast() {
        if (this.isEmpty()) {
            throw new Error("Array is empty")
        }
        // 因为 end 是开区间，所以先左移，再赋值
        this.end = (this.end - 1 + this.size) % this.size;
        this.arr[this.end] = null;
        this.count--;
        // 缩容
        if (this.count > 0 && this.count == this.size / 4) {
            this.resize(this.size / 2)
        }
    }

    getFirst() {
        if (this.isEmpty()) {
            throw new Error('Array is empty');
        }

        return this.arr[this.start];
    }

    getLast() {
        if (this.isEmpty()) {
            throw new Error('Array is empty')
        }

        return this.arr[(this.end - 1 + this.size) % this.size]
    }


    isFull() {
        return this.count === this.size;
    }

    // size() {
    //     return this.count;
    // }

    isEmpty() {
        return this.count === 0;
    }


}