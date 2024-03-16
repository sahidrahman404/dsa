function summingSquares(
    num: number,
    memo: Record<string, number> = {},
): number {
    if (num === 1) return 1;
    if (num in memo) return memo[num];
    if (num === 0) return 0;
    let minSum = Infinity;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        const squares = i * i;
        const sum = summingSquares(num - squares, memo) + 1;
        minSum = Math.min(minSum, sum);
    }
    memo[num] = minSum;
    return memo[num];
}

export { summingSquares };
