function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let i = 0, j = 1;
    const longestArray = [s[i]];
    let longest = -1;
    while (i < j && j < s.length) {
        if (!longestArray.includes(s[j])) {
            j++
        } else {
            longest = Math.max(longestArray.length, longest)
            i++;
            j = i + 1;
        }
    }

    return longest
};
