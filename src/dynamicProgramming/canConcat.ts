function canConcat(
    str: string,
    words: string[],
    memo: Record<string, boolean> = {},
): boolean {
    if (str in memo) return memo[str];
    if (str === "") return true;
    for (const word of words) {
        if (str.startsWith(word) === true) {
            const suffix = str.slice(word.length);
            if (canConcat(suffix, words) === true) {
                memo[str] = true;
                return memo[str];
            }
        }
    }
    memo[str] = false;
    return memo[str];
}

export { canConcat };
