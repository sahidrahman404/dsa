function befittingBrackets(s: string): boolean {
    const stack: string[] = [];
    const brackets: Record<string, string> = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    for (const char of s) {
        if (char in brackets) {
            stack.push(brackets[char]);
        } else {
            const top = stack[stack.length - 1];
            if (stack.length > 0 && top === char) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

export { befittingBrackets };
