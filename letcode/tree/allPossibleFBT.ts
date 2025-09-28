const cache: TreeNode[][] = [null];

function allPossibleFBT(n: number): Array<TreeNode | null> {
    if (n % 2 === 0) {
        return [];
    }
    if (cache[n]) {
        return cache[n];
    }

    if (n === 1) {
        return [new TreeNode(0, null, null)];
    }

    const ret: TreeNode[] = [];

    for (let i = 1; n - i - 1 >= 1; i += 2) {
        const leftChildren = allPossibleFBT(i);
        const rightChildren = allPossibleFBT(n - i - 1);

        for (const l of leftChildren) {
            for (const r of rightChildren) {
                ret.push(new TreeNode(0, l, r));
            }
        }
    }

    cache[n] = ret;

    return ret;
};