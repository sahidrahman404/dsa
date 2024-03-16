function trib(n: number, memo: Record<string, number> = {}): number {
    if (n in memo) return memo[n];
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;
    memo[n] = trib(n - 1, memo) + trib(n - 2, memo) + trib(n - 3, memo);
    return memo[n];
}

export { trib };
