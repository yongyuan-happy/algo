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


var levelOrderTraverse = function (root) {
    if (root === null) {
        return;
    }
    var q = [];
    q.push(root);
    // 记录当前遍历到的层数（根节点视为第 1 层）
    var depth = 1;

    while (q.length !== 0) {
        var sz = q.length;
        for (var i = 0; i < sz; i++) {
            var cur = q.shift();
            // 访问 cur 节点，同时知道它所在的层数
            console.log("depth = " + depth + ", val = " + cur.val);

            for (var j = 0; j < cur.children.length; j++) {
                q.push(cur.children[j]);
            }
        }
        depth++;
    }
}

// 多叉树的层序遍历
// 每个节点自行维护 State 类，记录深度等信息
function State(node, depth) {
    this.node = node;
    this.depth = depth;
}

var levelOrderTraverse = function (root) {
    if (root === null) {
        return;
    }
    var q = [];
    // 记录当前遍历到的层数（根节点视为第 1 层）
    q.push(new State(root, 1));

    while (q.length !== 0) {
        var state = q.shift();
        var cur = state.node;
        var depth = state.depth;
        // 访问 cur 节点，同时知道它所在的层数
        console.log("depth = " + depth + ", val = " + cur.val);

        for (var i = 0; i < cur.children.length; i++) {
            q.push(new State(cur.children[i], depth + 1));
        }
    }
}