function numsSameConsecDiff(n: number, k: number): number[] {
    const res: number[] = [];
    const ret: number[] = [];

    function backTrack() {
        if (length === n) {
            res.push(Number(res.join('')));
            return;
        }

        for (let i = 0; i < 10; i++) {
            const length = ret.length;
            if (length !== 0 && ret[0] === 0) continue;
            if (!(length !== 0 && (ret[length - 1] - i === k || i - ret[length - 1] == k))) {
                continue;
            }


            ret.push(i);
            backTrack();
            ret.pop();
        }
    }

    backTrack();

    return res;
}