function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const res: number[][] = [];
    let cur = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (cur[1] >= intervals[i][0]) {
            cur[1] = Math.max(cur[1], intervals[i][1]);
        } else {
            res.push(cur);
            cur = intervals[i];
        }
    }
    res.push(cur);
    return res;
}