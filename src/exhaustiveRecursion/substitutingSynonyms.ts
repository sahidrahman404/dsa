function substituteSynonyms(
    s: string,
    synonym: Record<string, string[]>,
): string[] {
    if (s.length === 0) return [""];
    const result: string[] = [];
    const { choices, reminder } = getChoices(s, synonym);
    for (const choice of choices) {
        const reminderPossibilities = substituteSynonyms(reminder, synonym);
        for (const possibility of reminderPossibilities) {
            result.push(
                possibility === ""
                    ? choice + possibility
                    : choice + " " + possibility,
            );
        }
    }
    return result;
}

type GetChoicesResult = {
    choices: string[];
    reminder: string;
};

function getChoices(
    s: string,
    synonym: Record<string, string[]>,
): GetChoicesResult {
    const strings = s.split(" ");
    if (strings[0] in synonym) {
        return {
            choices: synonym[strings[0]],
            reminder: strings.slice(1).join(" "),
        };
    } else {
        return {
            choices: [strings[0]],
            reminder: strings.slice(1).join(" "),
        };
    }
}

export { substituteSynonyms };
