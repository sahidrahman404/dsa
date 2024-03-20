function decompressBraces(s: string): string {
    const numberChars = "123456789";
    const stack: (string | number)[] = [];
    for (let char of s) {
        if (numberChars.includes(char)) {
            stack.push(Number(char));
        } else {
            if (char === "}") {
                let segment = "";
                while (typeof stack[stack.length - 1] !== "number") {
                    segment = stack.pop() + segment;
                }
                const segments: string[] = [];
                const multiplier = stack.pop();
                if (typeof multiplier === "number") {
                    for (let i = 0; i < multiplier; i++) {
                        segments.push(segment);
                    }
                }
                stack.push(segments.join(""));
            } else if (char !== "{") {
                stack.push(char);
            }
        }
    }
    return stack.join("");
}

export { decompressBraces };
