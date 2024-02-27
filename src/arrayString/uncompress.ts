export default function uncompress(s: string): string {
    const number = "0123456789";
    let result: string[] = [];
    let i = 0;
    let j = 0;
    while (j <= s.length) {
        if (number.includes(s[j])) {
            j += 1;
        } else {
            const count = Number(s.slice(i, j));

            for (let i = 0; i < count; i++) {
                result.push(s[j]);
            }
            j += 1;
            i = j;
        }
    }
    return result.join("");
}
