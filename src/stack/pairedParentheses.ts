function pairedParentheses(s: string): boolean {
    let count = 0;
    for (const char of s) {
        if (char === "(") {
            count++;
        } else if (char === ")") {
            if (count === 0) {
                return false;
            }
            count--;
        }
    }

    return count === 0;
}

export { pairedParentheses };
