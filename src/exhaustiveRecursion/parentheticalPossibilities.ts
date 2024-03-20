function parentheticalPossibilities(s: string): string[] {
    if (s.length === 0) return [""];
    const { choices, reminder } = getChoices(s);
    const result: string[] = [];
    for (const choice of choices) {
        const remindernpossibilites = parentheticalPossibilities(reminder);
        for (const substrings of remindernpossibilites) {
            result.push(choice + substrings);
        }
    }
    return result;
}

type GetChoicesResult = {
    choices: string;
    reminder: string;
};

function getChoices(s: string): GetChoicesResult {
    if (s[0] === "(") {
        const end = s.indexOf(")");
        return {
            choices: s.slice(1, end),
            reminder: s.slice(end + 1),
        };
    } else {
        return {
            choices: s[0],
            reminder: s.slice(1),
        };
    }
}

export { parentheticalPossibilities };
