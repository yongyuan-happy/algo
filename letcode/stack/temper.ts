function dailyTemperatures(temperatures: number[]): number[] {
    const length = temperatures.length;
    const stack: number[] = [];
    const answer: number[] = new Array(length).fill(0);

    for (let i = 0; i < length; i++) {
        while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const p = stack.pop();
            answer[p!] = (i - p!);
        }

        stack.push(i);
    }

    return answer;
};