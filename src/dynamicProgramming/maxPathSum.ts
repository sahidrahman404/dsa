function maxPathSum(
    grid: number[][],
    r: number = 0,
    c: number = 0,
    memo: Record<string, number> = {},
): number {
    const pos = `${r},${c}`;
    if (pos in memo) return memo[pos];
    if (r === grid.length || c === grid[0].length) return -Infinity;
    if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
    const downValue = maxPathSum(grid, r + 1, c, memo);
    const rightValue = maxPathSum(grid, r, c + 1, memo);
    memo[pos] = grid[r][c] + Math.max(downValue, rightValue);
    return memo[pos];
}

export { maxPathSum };
