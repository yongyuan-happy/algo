https://labuladong.online/algo/essential-technique/backtrack-framework/
https://labuladong.online/algo/essential-technique/permutation-combination-subset-all-in-one/

// 回溯算法框架
void backtrack(...) {
    // base case
    if (...) return;

    for (int i = 0; i < ...; i++) {
        // 做选择
        // 剪枝处理 永远聚焦于枝条 而不是节点
        ...

        // 进入下一层决策树
        backtrack(...);

        // 撤销刚才做的选择
        ...
    }
}

// DFS 算法把「做选择」「撤销选择」的逻辑放在 for 循环外面 个人理解为DFS不需要剪枝动作 做到递归即可
var dfs = function (root) {
    if (root == null) return;
    // 做选择
    console.log("enter node %s", root);
    for (var i = 0; i < root.children.length; i++) {
        dfs(root.children[i]);
    }
    // 撤销选择
    console.log("leave node %s", root);
}


形式一、元素无重不可复选，即 nums 中的元素都是唯一的，每个元素最多只能被使用一次，backtrack 核心代码如下：


// 组合/子集问题回溯算法框架
var backtrack = function (nums, start) {
    // 回溯算法标准框架
    for (var i = start; i < nums.length; i++) {
        // 做选择
        track.addLast(nums[i]);
        // 注意参数
        backtrack(nums, i + 1);
        // 撤销选择
        track.removeLast();
    }
}

// 排列问题回溯算法框架
var backtrack = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        // 剪枝逻辑
        if (used[i]) {
            continue;
        }
        // 做选择
        used[i] = true;
        track.addLast(nums[i]);

        backtrack(nums);
        // 撤销选择
        track.removeLast();
        used[i] = false;
    }
}

元素可重不可复选，即 nums 中的元素可以存在重复，每个元素最多只能被使用一次，其关键在于排序和剪枝，backtrack 核心代码如下：

nums.sort((a, b) => a - b);
// 组合/子集问题回溯算法框架
var backtrack = function (nums, start) {
    // 回溯算法标准框架
    for (var i = start; i < nums.length; i++) {
        // 剪枝逻辑，跳过值相同的相邻树枝
        if (i > start && nums[i] === nums[i - 1]) {
            continue;
        }
        // 做选择
        track.add(nums[i]);
        // 注意参数
        backtrack(nums, i + 1);
        // 撤销选择
        track.pop();
    }
}

nums.sort((a, b) => a - b);
// 排列问题回溯算法框架
var backtrack = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        // 剪枝逻辑
        if (used[i]) {
            continue;
        }
        // 剪枝逻辑，固定相同的元素在排列中的相对位置
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
            continue;
        }
        // 做选择
        used[i] = true;
        track.add(nums[i]);

        backtrack(nums);
        // 撤销选择
        track.pop();
        used[i] = false;
    }
}

形式三、元素无重可复选，即 nums 中的元素都是唯一的，每个元素可以被使用若干次，只要删掉去重逻辑即可，backtrack 核心代码如下：
// 组合/子集问题回溯算法框架
var backtrack = function (nums, start) {
    // 回溯算法标准框架
    for (var i = start; i < nums.length; i++) {
        // 做选择
        track.add(nums[i]);
        // 注意参数
        backtrack(nums, i);
        // 撤销选择
        track.pop();
    }
};

// 排列问题回溯算法框架
var backtrack = function (nums) {
    // 排列问题回溯算法框架
    for (var i = 0; i < nums.length; i++) {
        // 做选择
        track.add(nums[i]);
        backtrack(nums);
        // 撤销选择
        track.pop();
    }
};