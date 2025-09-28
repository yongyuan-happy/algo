function calculate(s: string): number {
    let res = 0, num = 0, sign = 1;
    const stack: number[] = [];

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch);
        } else if (ch === '+') {
            res += sign * num;
            num = 0;
            sign = 1;
        } else if (ch === '-') {
            res += sign * num;
            num = 0;
            sign = -1;
        } else if (ch === '(') {
            stack.push(res);
            stack.push(sign);
            res = 0;
            sign = 1;
        } else if (ch === ')') {
            res += sign * num;
            num = 0;
            res *= stack.pop()!;
            res += stack.pop()!;
        }
    }
    res += sign * num;
    return res;
}