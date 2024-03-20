function quickestConcat(
    s: string,
    words: string[],
    memo: Record<string, number> = {},
): number {
    if (s in memo) return memo[s];
    if (s === "") return 0;

    let count = Infinity;
    for (const word of words) {
        if (s.startsWith(word) === true) {
            const suffix = s.slice(word.length);
            const currCount = 1 + quickestConcat(suffix, words, memo);
            count = Math.min(count, currCount);
            memo[s] = count;
        }
    }

    memo[s] = count;

    return memo[s];
}

export { quickestConcat };
