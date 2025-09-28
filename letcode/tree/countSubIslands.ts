function countSubIslands(grid1: number[][], grid2: number[][]): number {
    const n = grid1.length;
    const m = grid1[0].length;
    let subNumber = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid1[i][j] == 0 && grid2[i][j] == 1) {
                // 这个岛屿肯定不是子岛，淹掉
                backtrack(i, j);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] == 1) {
                subNumber++;
                backtrack(i, j);
            }
        }
    }



    function backtrack(i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m) return;
        if (grid2[i][j] === 0) return;

        grid2[i][j] = 0;

        backtrack(i, j - 1);
        backtrack(i, j + 1);
        backtrack(i - 1, j);
        backtrack(i + 1, j);
    }

    return subNumber;
};



