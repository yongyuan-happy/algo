

// 种种数据结构，皆为数组（顺序存储）和链表（链式存储）的变换。
// 对于任何数据结构，其基本操作无非遍历 + 访问，再具体一点就是：增删查改。
// 各种数据结构的遍历 + 访问无非两种形式：线性的和非线性的。
// 线性就是 for/while 迭代为代表，非线性就是递归为代表


let traverse = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        // 迭代访问
    }
}


// 基本的单链表节点

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function traverse(root) {
    for (let i = root; i !== null; i = i.next) {
        // 迭代访问 p.val
    }
}

function traverse(root) {
    // 递归访问 head.val
    traverse(root.next);
}


// 基本的二叉树节点

//   Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


let traverse = function (root) {
    if (root === null) {
        return;
    }

    traverse(root.left);
    traverse(root.right);
}

// 基本的 N 叉树节点
// var TreeNode = function (val, children) {
//     this.val = val;
//     this.children = children;
// };

let traverse = function (root) {
    for (let i = 0; i < root.children.length; i++) {
        traverse(root.children[i])
    }
}

// 种种算法，皆为穷举。
// 穷举的关键点在于无遗漏和无冗余。熟练掌握算法框架，可以做到无遗漏；充分利用信息，可以做到无冗余。


let traverse = (nums) => {
    for (let i = 0; i < nums.length; i++) {

    }
}

let traverse2 = (nums, i) => {
    if (i === nums.length) {
        return;
    }
    traverse2(nums, i + 1);
}

let traverse3 = (head) => {
    for (let i = head; i !== null; i = i.next) {

    }
}

let traverse4 = (head) => {
    if (head === null) {
        return;
    }
    traverse4(head.next);
}


// 二叉树的遍历框架
var traverse = function (root) {
    if (root === null) {
        return;
    }
    // 前序位置
    traverse(root.left);
    // 中序位置
    traverse(root.right);
    // 后序位置
};

// N 叉树的遍历框架
var traverse = function (root) {
    if (root === null) {
        return;
    }
    // 前序位置
    for (var i = 0; i < root.children.length; i++) {
        traverse(root.children[i]);
    }
    // 后序位置
};

result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择

var levelOrderTraverse = function (root) {
    if (root === null) {
        return;
    }
    var q = [];
    q.push(root);
    while (q.length !== 0) {
        var cur = q.shift();
        // 访问 cur 节点
        console.log(cur.val);

        // 把 cur 的所有子节点加入队列
        for (var child of cur.children) {
            q.push(child);
        }
    }
}