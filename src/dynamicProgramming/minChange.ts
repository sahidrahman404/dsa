function minChange(
    amount: number,
    coins: number[],
    memo: Record<string, number> = {},
): number {
    if (amount in memo) return memo[amount];
    if (amount < 0) return Infinity;
    if (amount === 0) return 0;

    let minCoins = Infinity;
    for (const coin of coins) {
        const numCoins = minChange(amount - coin, coins, memo) + 1;
        minCoins = Math.min(minCoins, numCoins);
    }

    memo[amount] = minCoins;
    return minCoins;
}

export { minChange };
