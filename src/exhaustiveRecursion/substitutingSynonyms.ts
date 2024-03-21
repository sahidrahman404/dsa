function substituteSynonyms(
    s: string,
    synonyms: Record<string, string[]>,
): string[] {
    const strings = s.split(" ");
    return generate(strings, synonyms).map((s) => s.join(" "));
}

function generate(s: string[], synonyms: Record<string, string[]>): string[][] {
    if (s.length === 0) return [[]];

    const firstWord = s[0];
    const subarrays = generate(s.slice(1), synonyms);
    if (firstWord in synonyms) {
        const result: string[][] = [];
        for (const synonym of synonyms[firstWord]) {
            result.push(...subarrays.map((subarray) => [synonym, ...subarray]));
        }
        return result;
    } else {
        return subarrays.map((subarray) => [firstWord, ...subarray]);
    }
}

export { substituteSynonyms };
