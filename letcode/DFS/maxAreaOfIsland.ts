function maxAreaOfIsland(grid: number[][]): number {
    var m = grid.length, n = grid[0].length;
    // 遍历 grid，剩下的岛屿都是封闭岛屿
    let res = 0;
    let map = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                dfs(grid, i, j);
                res = Math.max(res, map);
                map = 0;
            }
        }
    }
    return res;

    // 从 (i, j) 开始，将与之相邻的陆地都变成海水
    function dfs(grid, i, j) {
        let m = grid.length, n = grid[0].length;
        if (i < 0 || j < 0 || i >= m || j >= n) {
            return;
        }
        if (grid[i][j] == 0) {
            // 已经是海水了
            return;
        }
        // 将 (i, j) 变成海水
        grid[i][j] = 0;
        map++
        // 淹没上下左右的陆地
        dfs(grid, i + 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i - 1, j);
        dfs(grid, i, j - 1);
    };
};