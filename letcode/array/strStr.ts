// 给你两个字符串 haystack 和 needle ，
// 请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
// 如果 needle 不是 haystack 的一部分，则返回  -1 。


function strStr(haystack: string, needle: string): number {
    let res = -1;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        console.log(i, "1")
        if (haystack[i] === needle[0]) {
            for (let j = i, m = 0; m < needle.length; j++, m++) {
                if (haystack[j] !== needle[m]) {
                    break;
                }
                // 一定要到末尾
                if (m === needle.length - 1) {
                    res = i;
                }
            }
        }
        console.log(i, "2")
        if (res !== -1) {
            break;
        }
    }

    return res;
};