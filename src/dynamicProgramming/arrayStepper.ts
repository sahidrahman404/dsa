function arrayStepper(
    nums: number[],
    i: number = 0,
    memo: Record<string, boolean> = {},
): boolean {
    if (i in memo) return memo[i];
    if (i === nums.length - 1) return true;
    if (nums[i] === 0) return false;
    const maxStep = nums[i];
    for (let step = 1; step <= maxStep; step++) {
        const nextStep = i + step;
        if (arrayStepper(nums, nextStep, memo) === true) {
            memo[i] = true;
            return true;
        }
    }
    memo[i] = false;
    return memo[i];
}

export { arrayStepper };
