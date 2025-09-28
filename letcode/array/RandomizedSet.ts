class RandomizedSet {
    constructor() {

    }

    private map = new Map<number, number>();
    private array: number[] = [];

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false;
        }
        this.array.push(val);
        this.map.set(val, this.array.length - 1);
        return true;
    }

    remove(val: number): boolean {
        if (this.map.has(val)) {
            let id = this.map.get(val);
            this.map.set(this.array[this.array.length - 1], id!)
            this.map.delete(val)
            this.array[id!] = this.array[this.array.length - 1]
            this.array.pop();
            return true;
        }

        return false;
    }

    getRandom(): number {
        return this.array[Math.floor(Math.random() * this.array.length)]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */