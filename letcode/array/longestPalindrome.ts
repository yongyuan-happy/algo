function longestPalindrome(s: string): string {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 0;

    const expandAroundCenter = (left: number, right: number) => {
        while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        let s1 = expandAroundCenter(i, i);
        let s2 = expandAroundCenter(i, i + 1);
        let s3 = Math.max(s1, s2);

        if (s3 > maxLength) {
            maxLength = s3;
            start = i - (Math.floor((s3 - 1) / 2));
        }
    }

    return s.substring(start, start + maxLength);
};