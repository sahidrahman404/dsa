export default function compress(s: string): string {
    let result: string[] = [];
    let i = 0;
    let j = 0;

    while (j <= s.length) {
        if (s[i] !== s[j]) {
            const count = j - i;
            if (count === 1) {
                result.push(s[i]);
            } else {
                result.push(`${count}${s[i]}`);
            }

            i = j;
        }
        j += 1;
    }
    return result.join("");
}
