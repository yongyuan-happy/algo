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


var closedIsland = function (grid) {
    var m = grid.length, n = grid[0].length;
    // 主函数：计算封闭岛屿的数量
    for (let j = 0; j < n; j++) {
        // 把靠上边的岛屿淹掉
        dfs(grid, 0, j);
        // 把靠下边的岛屿淹掉
        dfs(grid, m - 1, j);
    }
    for (let i = 0; i < m; i++) {
        // 把靠左边的岛屿淹掉
        dfs(grid, i, 0);
        // 把靠右边的岛屿淹掉
        dfs(grid, i, n - 1);
    }
    // 遍历 grid，剩下的岛屿都是封闭岛屿
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0) {
                res++;
                dfs(grid, i, j);
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
        if (grid[i][j] == 1) {
            // 已经是海水了
            return;
        }
        // 将 (i, j) 变成海水
        grid[i][j] = 1;
        // 淹没上下左右的陆地
        dfs(grid, i + 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i - 1, j);
        dfs(grid, i, j - 1);
    }
};


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