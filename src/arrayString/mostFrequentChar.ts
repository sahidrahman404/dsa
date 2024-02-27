// 'bookeeper'
export default function mostFrequentChar(s: string): string | null {
    const counter: Record<string, number> = {};
    for (const str of s) {
        if (!(str in counter)) {
            counter[str] = 1;
        }
        counter[str]++;
    }

    let best: string | null = null;
    for (const char of s) {
        if (best === null || counter[char] > counter[best]) {
            best = char;
        }
    }
    return best;
}
