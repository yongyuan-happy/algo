function smallestFromLeaf(root: TreeNode | null): string {
    if (!root) return '';

    let minNumber: number[] = [26];
    //fromCharCode
    function Dfs(root: TreeNode | null, path: number[]) {
        if (!root) return;

        path.push(root.val);

        if (!root.left && !root.right) {

            let mL = minNumber.length;
            let pL = path.length;

            while (mL !== 0 && pL !== 0) {
                if (minNumber[mL - 1] > path[pL - 1]) {
                    minNumber = [...path];
                    mL = 0;
                } else if (minNumber[mL - 1] < path[pL - 1]) {
                    mL = 0;
                } else {
                    mL--;
                    pL--;
                }
            }


            path.pop();
            return;
        }

        Dfs(root.left, path);
        Dfs(root.right, path);
        path.pop();
    }

    Dfs(root, []);

    return minNumber.reverse().map((v) => { return String.fromCharCode(v + 97) }).join('');
}