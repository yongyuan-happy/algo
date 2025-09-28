function wordBreak(s: string, wordDict: string[]): string[] {

    function dp(end: number): string[] {
        const ans = [];

        if (end === 0) {
            return [""];
        }

        for (let word of wordDict) {
            const length = word.length;

            if (end - length < 0 || s.substring(end - length, end) !== word) {
                continue;
            }

            console.log(end, word, '===');

            const sub = dp(end - length);

            console.log('yongyaun')
            if (sub.length === 0) {
                continue;
            }

            sub.forEach((v) => {
                if (v === '') {
                    ans.push(word);
                } else {
                    ans.push(v + ' ' + word);
                }

            })
        }

        return ans;
    }

    return dp(s.length);
};