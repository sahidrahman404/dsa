function countingChange(
    amount: number,
    coins: number[],
    i: number = 0,
    memo: Record<string, number> = {},
): number {
    const key = `${amount},${i}`;
    if (key in memo) return memo[key];
    if (amount === 0) return 1;

    let total = 0;
    const coin = coins[i];
    for (let qty = 0; qty * coin <= amount; qty++) {
        const reminder = amount - qty * coin;
        total += countingChange(reminder, coins, i + 1, memo);
    }
    memo[key] = total;
    return memo[key];
}

export { countingChange };
