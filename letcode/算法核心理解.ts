// 种种数据结构，皆为数组（顺序存储）和链表（链式存储）的变换。
// 对于任何数据结构，其基本操作无非遍历 + 访问。
// 各种数据结构的遍历 + 访问无非两种形式：线性的和非线性的。
// 线性就是 for/while 迭代为代表，非线性就是递归为代表

// 迭代遍历数组
var traverse = function(arr) {
    for (var i = 0; i < arr.length; i++) {

    }
}

// 递归遍历数组
var traverseRecursive = function(arr, i) {
    if (i == arr.length) {
        return;
    }
    // 前序位置
    traverseRecursive(arr, i + 1);
    // 后序位置
}


// 迭代遍历单链表
var traverseList = function(head) {
    for (var p = head; p != null; p = p.next) {

    }
}

// 递归遍历单链表
var traverseListRecursive = function(head) {
    if (head == null) {
        return;
    }
    // 前序位置
    traverseListRecursive(head.next);
    // 后序位置
}


// 种种算法，皆为穷举。
// 穷举的关键点在于无遗漏和无冗余。熟练掌握算法框架，可以做到无遗漏；充分利用信息，可以做到无冗余。

// 做算法题，如果对题目提出的问题没有思路，不妨尝试化简问题，
// 先从局部思考，先写出最简单粗暴的解法，也许会有突破点。逐步优化后也许就能找到最优解。

// DFS 算法属于遍历的思路，它的关注点在单个「节点」。
// BFS 算法属于遍历的思路，它的关注点在单个「节点」。
// 动态规划算法属于分解问题（分治）的思路，它的关注点在整棵「子树」。
// 回溯算法属于遍历的思路，它的关注点在节点间的「树枝」。
