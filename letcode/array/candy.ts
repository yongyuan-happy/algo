function candy(ratings: number[]): number {
    const left: number[] = [];
    let res = 0;
    for (let i = 0; i < ratings.length; i++) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }

    let right = 0;
    for (let i = ratings.length - 1; i >= 0; i--) {
        if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]) {
            right++;
        } else {
            right = 1;
        }

        res = res + Math.max(left[i], right);
    }

    return res;
};