//  重中之重
[1, 2, 3, 4, 5, 6, 7]
// 递归序
// 1，2，4，4，4，2，5，5，5，2，1，3，6，6，6，3，7，7，7，3，1


function orderRecur(head) {
    if (head === null) {
        return null;
    }
    // 先序
    orderRecur(head.left);
    // 中序
    orderRecur(head.right);
    // 后序
}

// 非递归
// 先右后左压入栈中


// 层级优先遍历
function cenji(head) {
    if (head === null) {
        return null
    }
    const queue = [];
    queue.push(head);

    while (queue.length !== 0) {
        let cur = queue.shift();
        console.log(cur.val);
        if (cur.left) {
            cur.push(cur.left);
        }
        if (cur.right) {
            cur.push(cur.right);
        }
    }
}


let TreeNode = function (x) {
    this.val = x;
    this.left = null;
    this.right = null;
}


let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);