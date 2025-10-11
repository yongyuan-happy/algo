// 所谓区间问题，就是线段问题，让你合并所有线段、找出线段的交集等等。主要有两个技巧：

// 1、排序。常见的排序方法就是按照区间起点排序，或者先按照起点升序排序，若起点相同，
// 则按照终点降序排序。当然，如果你非要按照终点排序，无非对称操作，本质都是一样的。

// 2、画图。就是说不要偷懒，勤动手，两个区间的相对位置到底有几种可能，不同的相对位置我们的代码应该怎么去处理。


// 1288. 删除被覆盖区间
var removeCoveredIntervals = function (intervals) {
    // 按照起点升序排列，起点相同时降序排列
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    // 记录合并区间的起点和终点
    let left = intervals[0][0];
    let right = intervals[0][1];
    let res = 0;

    for (let i = 1; i < intervals.length; i++) {
        let intv = intervals[i];

        // 如果覆盖 分析覆盖情况 因为升序的缘故所以第一个就是最大范围的
        if (left <= intv[0] && right >= intv[1]) {
            res++;
        } else {
            left = intv[0];
            right = intv[1];
        }
    }

    return intervals.length - res;
};


// 986. 区间列表的交集

var intervalIntersection = function (firstList, secondList) {
    const firstListLen = firstList.length;
    const secondListLen = secondList.length;

    const res = [];
    let i = 0, j = 0;

    while (i < firstListLen && j < secondListLen) {
        const a1 = firstList[i][0], a2 = firstList[i][1];
        const b1 = secondList[j][0], b2 = secondList[j][1];
        // 两个区间存在交集
        if (b2 >= a1 && a2 >= b1) {
            // 计算出交集，加入 res
            res.push([Math.max(a1, b1), Math.min(a2, b2)]);
        }
        // 指针前进
        if (b2 < a2) {
            j++;
        } else {
            i++;
        }
    }
    return res;
};

