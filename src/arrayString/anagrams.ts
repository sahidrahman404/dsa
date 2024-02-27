export default function anagrams(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false;
    }
    const counter: Record<string, number> = {};

    for (const s of s1) {
        if (!(s in counter)) {
            counter[s] = 0;
        }

        counter[s]++;
    }

    for (const s of s2) {
        if (!(s in counter)) {
            return false;
        }
        counter[s]--;
    }

    for (const key in counter) {
        if (counter[key] !== 0) {
            return false;
        }
    }

    return true;
}
