function nestingScore(s: string): number {
    const stack: number[] = [0];
    for (const char of s) {
        if (char === "[") {
            stack.push(0);
        } else {
            const popped = stack.pop();
            if (popped !== undefined) {
                if (popped === 0) {
                    stack[stack.length - 1]++;
                } else if (popped > 0) {
                    stack[stack.length - 1] += popped * 2;
                }
            }
        }
    }
    return stack.pop() ?? -1;
}

export { nestingScore };
