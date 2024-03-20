function knightlyNumber(
    n: number,
    m: number,
    kr: number,
    kc: number,
    pr: number,
    pc: number,
    memo: Record<string, number> = {},
): number {
    const key = `${m},${kr},${kc}`;
    if (key in memo) return memo[key];

    const krInbound = 0 <= kr && kr < n;
    const kcInbound = 0 <= kc && kc < n;
    if (!krInbound || !kcInbound) return 0;
    if (m === 0) {
        if (kr === pr && kc === pc) {
            return 1;
        } else {
            return 0;
        }
    }

    const neighborPositions = [
        [2, -1],
        [1, -2],
        [2, 1],
        [1, 2],
        [-2, 1],
        [-1, 2],
        [-2, -1],
        [-1, -2],
    ];

    let count = 0;
    for (const [nr, nc] of neighborPositions) {
        count += knightlyNumber(n, m - 1, kr + nr, kc + nc, pr, pc, memo);
        memo[key] = count;
    }
    memo[key] = count;

    return memo[key];
}

export { knightlyNumber };
