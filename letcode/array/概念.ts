let arr: number[] = []
for (let i = 0; i < 10; i++) {
    arr.push(i);
}
// 增
arr.push(1); //时间复杂度 O(1)
arr.unshift(-1); //时间复杂度 O(n)
arr.splice(2, 0, 666);//时间复杂度 O(n)


// 删
arr.shift()//时间复杂度 O(n)
arr.pop(); //时间复杂度 O(1)
arr.splice(2, 1);//时间复杂度 O(n)


// 改
arr[0] = 0;  //时间复杂度 O(1)

// 查
var index = arr.indexOf(666);//时间复杂度 O(n)
