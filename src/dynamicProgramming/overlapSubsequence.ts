function overlapSubsequence(
    str1: string,
    str2: string,
    i: number = 0,
    j: number = 0,
    memo: Record<string, number> = {},
): number {
    const key = `${i},${j}`;
    if (key in memo) return memo[key];
    if (i === str1.length || j === str2.length) return 0;

    if (str1[i] === str2[j]) {
        memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1);
        return memo[key];
    } else {
        const left = overlapSubsequence(str1, str2, i + 1, j);
        const right = overlapSubsequence(str1, str2, i, j + 1);
        memo[key] = Math.max(left, right);
        return memo[key];
    }
}

export { overlapSubsequence };
