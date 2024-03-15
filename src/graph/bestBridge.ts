function bestBridge(grid: string[][]): number {
    let mainIsland: Set<string> = new Set();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const potentialIsland = traverse(grid, r, c);
            if (potentialIsland.size > 0) {
                mainIsland = potentialIsland;
            }
        }
    }

    const visited: Set<string> = new Set(mainIsland);
    const queue: [number, number, number][] = [];
    for (let pos of mainIsland) {
        const [r, c] = pos.split(",").map(Number);
        visited.add(`${r},${c}`);
        queue.push([r, c, 0]);
    }

    while (queue.length > 0) {
        const current = queue.shift();
        if (current) {
            const [r, c, distance] = current;
            if (grid[r][c] === "L" && !mainIsland.has(`${r},${c}`))
                return distance - 1;

            const directions = [
                [1, 0],
                [0, 1],
                [-1, 0],
                [0, -1],
            ];
            for (const [rowDirection, colDirection] of directions) {
                const neighborRow = rowDirection + r;
                const neighborCol = colDirection + c;
                const neighborPos = `${neighborRow},${neighborCol}`;
                if (
                    isInbound(grid, neighborRow, neighborCol) &&
                    !visited.has(neighborPos)
                ) {
                    queue.push([neighborRow, neighborCol, distance + 1]);
                    visited.add(neighborPos);
                }
            }
        }
    }
    return -1;
}

function isInbound(grid: string[][], r: number, c: number): boolean {
    const rInbound = 0 <= r && r < grid.length;
    const cInbound = 0 <= c && c < grid[0].length;
    return rInbound && cInbound;
}

function traverse(
    grid: string[][],
    r: number,
    c: number,
    visited: Set<string> = new Set(),
): Set<string> {
    if (!isInbound(grid, r, c) || grid[r][c] === "W") return visited;

    const pos = `${r},${c}`;
    if (visited.has(pos)) return visited;
    visited.add(pos);

    traverse(grid, r + 1, c, visited);
    traverse(grid, r, c + 1, visited);
    traverse(grid, r - 1, c, visited);
    traverse(grid, r, c - 1, visited);
    return visited;
}

export { bestBridge };
