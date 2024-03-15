function closestCarrot(grid: string[][], r: number, c: number) {
    const visited: Set<string> = new Set([r + "," + c]);
    const queue: [number, number, number][] = [[r, c, 0]];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            const [row, col, distance] = node;

            if (grid[row][col] === "C") return distance;
            const directions = [
                [1, 0],
                [0, 1],
                [-1, 0],
                [0, -1],
            ];
            for (const [rowDirection, colDirection] of directions) {
                const neighborRow = row + rowDirection;
                const neighborCol = col + colDirection;

                const neighborRowInbound =
                    0 <= neighborRow && neighborRow < grid.length;
                const neighborColInbound =
                    0 <= neighborCol && neighborCol < grid[0].length;
                const pos = `${neighborRow},${neighborCol}`;
                if (
                    neighborRowInbound &&
                    neighborColInbound &&
                    grid[neighborRow][neighborCol] !== "X" &&
                    !visited.has(pos)
                ) {
                    queue.push([neighborRow, neighborCol, distance + 1]);
                    visited.add(pos);
                }
            }
        }
    }
    return -1;
}

export { closestCarrot };
