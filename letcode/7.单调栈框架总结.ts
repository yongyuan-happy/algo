var calculateGreaterElement = function (nums) {
    var n = nums.length;
    // 存放答案的数组
    var res = new Array(n);
    var s = [];
    // 倒着往栈里放
    for (var i = n - 1; i >= 0; i--) {
        // 判定个子高矮
        while (s.length != 0 && s[s.length - 1] <= nums[i]) {
            // 矮个起开，反正也被挡着了。。。
            s.pop();
        }
        // nums[i] 身后的更大元素
        res[i] = s.length == 0 ? -1 : s[s.length - 1];
        s.push(nums[i]);
    }
    return res;
}

function dailyTemperatures(temperatures: number[]): number[] {
    const length = temperatures.length;
    const stack: number[] = [];
    const answer: number[] = new Array(length).fill(0);

    for (let i = 0; i < length; i++) {
        while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const p = stack.pop();
            answer[p!] = (i - p!);
        }

        stack.push(i);
    }

    return answer;
};

// https://labuladong.online/algo/problem-set/monotonic-stack/ 单调栈