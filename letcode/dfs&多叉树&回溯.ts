// 多叉树遍历
function traverse() {
    if (root === null) {
        return;
    }

    for (let child of root.children) {
        traverse(child)
    }
}

// dfs
// 关注的是叶子结点
function dfs() {
    if ('reached the leaf') {
        //   到达叶子结点返回
        return;
    }

    // 做选择

    for (let i = 0; i < n; i++) {
        dfs()
    }

    // 撤销选择
}


// 回溯算法
// 关注的是边
function backtrack() {

    // 终止条件
    if ('reached the leaf node') {
        return;
    }

    [].includes

    for (let i = 0; i < n; i++) {

         // 剪枝逻辑
        if (...) {
            // 第 i 个选择不满足条件则跳过
            continue;
        }

        // 做选择

        backtrack();

        // 撤销选择
    }
}

