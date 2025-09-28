function numIslands(grid: string[][]): number {
    const n = grid.length;
    const m = grid[0].length;
    let res = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                // 找到一个岛就让这个岛全变为海
                dfs(i, j);
                res++
            }
        }
    }

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m) {
            return;
        }
        
        if (grid[i][j] === "0") {
            return;
        }

        grid[i][j] = '0';
        dfs(i, j - 1);
        dfs(i, j + 1);
        dfs(i - 1, j);
        dfs(i + 1, j);
    }

    return res;
};