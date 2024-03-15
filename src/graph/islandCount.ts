function islandCount(grid: string[][]): number {
    let island = 0;
    const visited: Set<string> = new Set();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited) === true) {
                island++;
            }
        }
    }
    return island;
}

function explore(
    grid: string[][],
    r: number,
    c: number,
    visited: Set<string>,
): boolean {
    const rowInbound = 0 <= r && r < grid.length;
    const colInbound = 0 <= c && c < grid[0].length;
    if (!rowInbound || !colInbound) return false;

    if (grid[r][c] === "W") return false;

    const pos = `${r},${c}`;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited);
    explore(grid, r, c + 1, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);

    return true;
}

export { islandCount };
