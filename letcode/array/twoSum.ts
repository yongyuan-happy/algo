function twoSum(price: number[], target: number): number[] {
    let l = 0, r = price.length - 1;
    while (l < r) {
        const current = price[l] + price[r];
        if (current > target) r--;
        else if (current < target) l++;
        else return [price[l], price[r]];
    }
};
