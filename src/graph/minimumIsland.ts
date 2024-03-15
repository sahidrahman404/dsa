function minimumIsland(grid: string[][]): number {
    let minSize = Infinity;
    let visited: Set<string> = new Set();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const currentSize = exploreSize(grid, r, c, visited);
            if (currentSize > 0 && currentSize < minSize) minSize = currentSize;
        }
    }
    return minSize;
}

function exploreSize(
    grid: string[][],
    r: number,
    c: number,
    visited: Set<string>,
): number {
    const rowInbound = 0 <= r && r < grid.length;
    const colInbound = 0 <= c && c < grid[0].length;
    if (!rowInbound || !colInbound) return 0;
    if (grid[r][c] === "W") return 0;

    const pos = `${r},${c}`;
    if (visited.has(pos)) return 0;

    visited.add(pos);

    let size = 1;

    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c + 1, visited);
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);

    return size;
}

const grid = [
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"],
];

minimumIsland(grid);

export { minimumIsland };
