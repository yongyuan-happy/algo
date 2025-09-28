// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，
// 返回这些子串的起始索引。不考虑答案输出的顺序。
function findAnagrams(s: string, p: string): number[] {
    const res: number[] = [];
    const need = new Map<string, number>();
    const window = new Map<string, number>();

    // 统计 p 的字符频次
    for (const ch of p) {
        need.set(ch, (need.get(ch) ?? 0) + 1);
    }

    let left = 0, right = 0, valid = 0;

    while (right < s.length) {
        const c = s[right];
        right++;
        if (need.has(c)) {
            window.set(c, (window.get(c) ?? 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 当窗口大小等于 p 时，判断是否为异位词
        while (right - left >= p.length) {
            if (valid === need.size) {
                res.push(left);
            }
            const d = s[left];
            left++;
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d)! - 1);
            }
        }
    }

    return res;
}