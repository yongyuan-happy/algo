
function sortedArrayToBST(nums: number[]): TreeNode | null {
    function helper(nums: number[], left: number, right: number) {
        if (left > right) return null;

        const mid = Math.floor((left + right + 1) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = helper(nums, left, mid - 1);
        root.right = helper(nums, mid + 1, right);

        return root;
    }


    return helper(nums, 0, nums.length - 1);
};