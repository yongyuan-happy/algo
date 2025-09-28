/**
 * 二维网格移位算法
 * 时间复杂度: O(m * n) - 优化版本
 * 空间复杂度: O(m * n)
 * 
 * 问题描述：给定一个二维网格，将所有元素向右移动k步
 * 当元素到达网格边界时，会移动到下一行的开头
 * 当元素到达最后一行最后一列时，会移动到第一行第一列
 */

function shiftGrid(grid: number[][], k: number): number[][] {
    if (!grid || grid.length === 0 || grid[0].length === 0) return grid;
    
    const m = grid.length;
    const n = grid[0].length;
    const totalElements = m * n;
    
    // 处理k大于总元素数的情况
    k = k % totalElements;
    if (k === 0) return grid;
    
    // 使用额外空间的方法
    const result: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 计算新位置
            const newPos = (i * n + j + k) % totalElements;
            const newRow = Math.floor(newPos / n);
            const newCol = newPos % n;
            result[newRow][newCol] = grid[i][j];
        }
    }
    
    return result;
}

// 原地移位版本（更复杂但空间效率更高）
function shiftGridInPlace(grid: number[][], k: number): number[][] {
    if (!grid || grid.length === 0 || grid[0].length === 0) return grid;
    
    const m = grid.length;
    const n = grid[0].length;
    const totalElements = m * n;
    
    k = k % totalElements;
    if (k === 0) return grid;
    
    // 使用环状移位算法
    const visited = new Set<number>();
    
    for (let start = 0; start < totalElements; start++) {
        if (visited.has(start)) continue;
        
        let current = start;
        let prevValue = grid[Math.floor(current / n)][current % n];
        
        do {
            const next = (current + k) % totalElements;
            const nextRow = Math.floor(next / n);
            const nextCol = next % n;
            
            const temp = grid[nextRow][nextCol];
            grid[nextRow][nextCol] = prevValue;
            prevValue = temp;
            
            visited.add(current);
            current = next;
        } while (current !== start);
    }

    return grid;
}

// 使用一维数组模拟（最简单直观）
function shiftGridSimple(grid: number[][], k: number): number[][] {
    if (!grid || grid.length === 0 || grid[0].length === 0) return grid;
    
    const m = grid.length;
    const n = grid[0].length;
    
    // 将二维数组展平为一维数组
    const flatArray: number[] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            flatArray.push(grid[i][j]);
        }
    }
    
    // 执行移位
    k = k % flatArray.length;
    if (k > 0) {
        const temp = flatArray.slice(-k);
        flatArray.splice(-k);
        flatArray.unshift(...temp);
    }
    
    // 重新构建二维数组
    const result: number[][] = [];
    for (let i = 0; i < m; i++) {
        result[i] = [];
        for (let j = 0; j < n; j++) {
            result[i][j] = flatArray[i * n + j];
        }
    }
    
    return result;
}

// 测试用例
interface TestCase {
    grid: number[][];
    k: number;
    expected: number[][];
}

const testCases: TestCase[] = [
    {
        grid: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        k: 1,
        expected: [[9, 1, 2], [3, 4, 5], [6, 7, 8]]
    },
    {
        grid: [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]],
        k: 4,
        expected: [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]]
    },
    {
        grid: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        k: 9,
        expected: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    }
];

console.log("=== Shift Grid 测试 ===");
testCases.forEach((testCase, index) => {
    console.log(`\n测试 ${index + 1}:`);
    console.log("输入网格:", testCase.grid);
    console.log("移位次数:", testCase.k);
    
    const result1 = shiftGrid([...testCase.grid.map(row => [...row])], testCase.k);
    const result2 = shiftGridInPlace([...testCase.grid.map(row => [...row])], testCase.k);
    const result3 = shiftGridSimple([...testCase.grid.map(row => [...row])], testCase.k);
    
    console.log("方法1结果:", result1);
    console.log("方法2结果:", result2);
    console.log("方法3结果:", result3);
    console.log("期望结果:", testCase.expected);
    
    const isCorrect1 = JSON.stringify(result1) === JSON.stringify(testCase.expected);
    const isCorrect2 = JSON.stringify(result2) === JSON.stringify(testCase.expected);
    const isCorrect3 = JSON.stringify(result3) === JSON.stringify(testCase.expected);
    
    console.log(`方法1正确: ${isCorrect1}`);
    console.log(`方法2正确: ${isCorrect2}`);
    console.log(`方法3正确: ${isCorrect3}`);
});

// 性能测试
const largeGrid = Array.from({length: 100}, (_, i) => 
    Array.from({length: 100}, (_, j) => i * 100 + j)
);
console.log("\n=== 性能测试 ===");
console.log("网格大小:", largeGrid.length, "x", largeGrid[0].length);

const start1 = Date.now();
shiftGrid([...largeGrid.map(row => [...row])], 50);
const end1 = Date.now();
console.log(`方法1耗时: ${(end1 - start1)}ms`);

const start2 = Date.now();
shiftGridInPlace([...largeGrid.map(row => [...row])], 50);
const end2 = Date.now();
console.log(`方法2耗时: ${(end2 - start2)}ms`);

const start3 = Date.now();
shiftGridSimple([...largeGrid.map(row => [...row])], 50);
const end3 = Date.now();
console.log(`方法3耗时: ${(end3 - start3)}ms`);