function nonAdjacentSum(
    nums: number[],
    i: number = 0,
    memo: Record<string, number> = {},
): number {
    if (i in memo) return memo[i];
    if (i >= nums.length) return 0;
    const include = nums[i] + nonAdjacentSum(nums, i + 2, memo);
    const exclude = nonAdjacentSum(nums, i + 1, memo);
    memo[i] = Math.max(include, exclude);
    return memo[i];
}

export { nonAdjacentSum };
