function numsSameConsecDiff(n: number, k: number): number[] {
    const res: number[] = [];
    const stack: number[] = [];

    function backTrack() {

        if (stack.length === n) {
            res.push(Number(stack.join('')));
            return;
        }

        for (let i = 0; i < 10; i++) {
            const length = stack.length;
            if (length !== 0 && stack[0] === 0) continue;

            if (length !== 0 && stack[length - 1] - i !== k && i - stack[length - 1] !== k) {
                continue;
            }


            stack.push(i);
            backTrack();
            stack.pop();
        }
    }

    backTrack();

    return res;
}