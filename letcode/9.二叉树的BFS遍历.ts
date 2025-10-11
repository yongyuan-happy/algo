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

        // 把 cur 的左右子节点加入队列
        if (cur.left !== null) {
            q.push(cur.left);
        }
        if (cur.right !== null) {
            q.push(cur.right);
        }
    }
}


var levelOrderTraverse = function (root) {
    if (root === null) {
        return;
    }
    let q = [];
    q.push(root);
    // 记录当前遍历到的层数（根节点视为第 1 层）
    let depth = 1;

    while (q.length !== 0) {
        let sz = q.length;
        for (let i = 0; i < sz; i++) {
            let cur = q.shift();
            // 访问 cur 节点，同时知道它所在的层数
            console.log("depth = " + depth + ", val = " + cur.val);

            // 把 cur 的左右子节点加入队列
            if (cur.left !== null) {
                q.push(cur.left);
            }
            if (cur.right !== null) {
                q.push(cur.right);
            }
        }
        depth++;
    }
};

function State(node, depth) {
    this.node = node;
    this.depth = depth;
}

var levelOrderTraverse = function (root) {
    if (root === null) {
        return;
    }
    // @visualize bfs
    var q = [];
    // 根节点的路径权重和是 1
    q.push(new State(root, 1));

    while (q.length !== 0) {
        var cur = q.shift();
        // 访问 cur 节点，同时知道它的路径权重和
        console.log("depth = " + cur.depth + ", val = " + cur.node.val);

        // 把 cur 的左右子节点加入队列
        if (cur.node.left !== null) {
            q.push(new State(cur.node.left, cur.depth + 1));
        }
        if (cur.node.right !== null) {
            q.push(new State(cur.node.right, cur.depth + 1));
        }
    }
};




function averageOfLevels(root: TreeNode | null): number[] {
    let res = [];
    if (root === null) {
        return res;
    }

    let q = [];
    q.push(root);
    // while 循环控制从上向下一层层遍历
    while (q.length > 0) {
        let sz = q.length;
        // 记录这一层的最大值
        let averageNum = 0;
        // for 循环控制每一层从左向右遍历
        for (let i = 0; i < sz; i++) {
            let cur = q.shift();
            averageNum += cur.val;
            if (cur.left !== null)
                q.push(cur.left);
            if (cur.right !== null)
                q.push(cur.right);
        }
        res.push(averageNum / sz);
    }
    return res;
};