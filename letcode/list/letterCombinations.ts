function letterCombinations(digits: string): string[] {
    const map = new Map();
    map.set('2', ["a", "b", "c"]);
    map.set('3', ["d", "e", "f"]);
    map.set('4', ["g", "h", "i"]);
    map.set('5', ["j", "k", "l"]);
    map.set('6', ["m", "n", "o"]);
    map.set('7', ["p", "q", "r", "s"]);
    map.set('8', ["t", "u", "v"]);
    map.set('9', ["w", "x", "y", "z"]);
    const ans: string[] = [];
    const ret: string[] = []

    if (digits.length === 0) return ans;

    function dfs(depth) {
        if (ret.length === digits.length) {
            ans.push(ret.join(''));
            return;
        }
        const fo = map.get(digits.charAt(depth));

        for (let i = 0; i < fo.length; i++) {
            ret.push(fo[i]);
            dfs(depth + 1);
            ret.pop();
        }
    }

    dfs(0);

    return ans;
};