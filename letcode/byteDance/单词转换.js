function wordLadder(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) return [];

    const visited = new Set([beginWord]);
    const queue = [[beginWord, [beginWord]]];

    while (queue.length > 0) {
        const [currentWord, path] = queue.shift();

        if (currentWord === endWord) return path;

        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord =
                    currentWord.slice(0, i) +
                    String.fromCharCode(c) +
                    currentWord.slice(i + 1);
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, [...path, newWord]]);
                }
            }
        }
    }

    return [];
}