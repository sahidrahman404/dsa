function maxPalinSubsequence(
    str: string,
    i: number = 0,
    j: number = str.length - 1,
): number {
    if (i === j) return 1;
    if (i > j) return 0;

    if (str[i] === str[j]) {
        return 2 + maxPalinSubsequence(str, i + 1, j - 1);
    } else {
        const left = maxPalinSubsequence(str, i + 1, j);
        const right = maxPalinSubsequence(str, i, j - 1);
        return Math.max(left, right);
    }
}

export { maxPalinSubsequence };
