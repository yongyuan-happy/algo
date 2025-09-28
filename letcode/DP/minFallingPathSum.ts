// 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

// 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。
// 在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。
// 具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。
function minFallingPathSum(matrix: number[][]): number {
    const length = matrix.length;

    function DP(row: number, col: number) {

        if (col > length - 1 || col < 0) {
            return;
        }

        if (row === 0) {
            return matrix[row][col];
        }

        return DP(row - 1, col) + Math.min(matrix[row][col + 1], matrix[row][col], matrix[row][col - 1]);
    }

    let sum = Infinity;

    for (let i = 0; i < length; i++) {
        sum = Math.min(DP(0, i), sum);
    }

    return sum;

};


