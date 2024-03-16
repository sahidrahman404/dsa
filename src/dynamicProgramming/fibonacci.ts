function fib(num: number, memo: Record<string, number> = {}): number {
    if (num in memo) return memo[num];
    if (num === 0) return 0;
    if (num === 1) return 1;
    memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
    return memo[num];
}
export { fib };
