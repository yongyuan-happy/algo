

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