class MinStack {
    private x_stack;
    private min_stack;

    constructor() {
        this.x_stack = [];
        this.min_stack = [Infinity];
    }

    push(x: number): void {
        this.x_stack.push(x);
        this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));

    }

    pop(): void {
        this.x_stack.pop();
        this.min_stack.pop();
    }

    top(): number {
        return this.x_stack[this.x_stack.length - 1];
    }

    getMin(): number {
        return this.min_stack[this.min_stack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */