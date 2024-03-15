// n = the length of the chess board
// kr = the starting row of the knight
// kc = the starting column of the knight
// pr = the row of the pawn
// pc = the column of the pawn
function knightAttack(
    n: number,
    kr: number,
    kc: number,
    pr: number,
    pc: number,
): number | null {
    const grid = buildGrid(n, kr, kc, pr, pc);
    const visited: Set<string> = new Set([`${kr},${kc}`]);
    const queue: [number, number, number][] = [[kr, kc, 0]];
    const directions = [
        [1, -2],
        [2, -1],
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
    ];
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr) {
            const [r, c, step] = curr;
            if (grid[r][c] === "P") return step;
            for (const [rowDirection, colDirection] of directions) {
                const neighborRow = rowDirection + r;
                const neighborCol = colDirection + c;
                const neighborRowInbound =
                    0 <= neighborRow && neighborRow < grid.length;
                const neighborColInbound =
                    0 <= neighborCol && neighborCol < grid[0].length;
                const neighborPos = `${neighborRow},${neighborCol}`;
                if (
                    neighborRowInbound &&
                    neighborColInbound &&
                    !visited.has(neighborPos)
                ) {
                    queue.push([neighborRow, neighborCol, step + 1]);
                    visited.add(neighborPos);
                }
            }
        }
    }
    return null;
}

function buildGrid(
    n: number,
    kr: number,
    kc: number,
    pr: number,
    pc: number,
): string[][] {
    const grid = Array.from(Array(n - 1), () =>
        Array.from(Array(n - 1), () => "X"),
    );
    grid[kr][kc] = "K";
    grid[pr][pc] = "P";
    return grid;
}

export { knightAttack };
