class MyCircularQueue {
    private capacity;
    private elements;
    private rear;
    private front;

    constructor(k: number) {
        this.capacity = k + 1;
        this.elements = new Array(this.capacity).fill(0);
        this.rear = 0;
        this.front = 0;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.elements[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        return true;

    }

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.front = (this.front + 1) % this.capacity;
        return true;
    }

    Front(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.elements[this.front];

    }

    Rear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.elements[(this.rear - 1 + this.capacity) % this.capacity];


    }

    isEmpty(): boolean {
        return this.rear == this.front;
    }

    isFull(): boolean {
        return ((this.rear + 1) % this.capacity) === this.front;
    }
}
