function sumPossible(
    amount: number,
    nums: number[],
    memo: Record<string, boolean> = {},
): boolean {
    if (nums.length === 0) return false;
    if (amount in memo) return memo[amount];
    if (amount < 0) return false;
    if (amount === 0) return true;
    for (const num of nums) {
        memo[amount] = sumPossible(amount - num, nums, memo);
    }
    return memo[amount];
}

export { sumPossible };
