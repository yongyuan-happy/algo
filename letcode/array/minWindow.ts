function minWindow(s: string, t: string): string {
    let left = 0, right = 0;
    let minLen = Infinity;
    let start = 0;

    // 统计 t 的字符频次
    const need = new Map<string, number>();
    for (const ch of t) {
        need.set(ch, (need.get(ch) ?? 0) + 1);
    }

    // 当前窗口的字符频次
    const window = new Map<string, number>();
    let valid = 0; // 满足条件的字符种类数

    while (right < s.length) {
        const c = s[right];
        right++;
        if (need.has(c)) {
            window.set(c, (window.get(c) ?? 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 当窗口满足条件时，尝试收缩左边界
        while (valid === need.size) {
            if (right - left < minLen) {
                minLen = right - left;
                start = left;
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

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}