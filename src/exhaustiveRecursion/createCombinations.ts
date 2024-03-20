function createCombinations(items: string[], k: number): string[][] {
    if (k === 0) return [[]];
    if (k > items.length) return [];
    const first = items[0];
    const partialCombos = createCombinations(items.slice(1), k - 1);
    const combWithFirst = [];
    for (const partialCombo of partialCombos) {
        combWithFirst.push([first, ...partialCombo]);
    }
    const comboWithoutFirst = createCombinations(items.slice(1), k);
    return [...combWithFirst, ...comboWithoutFirst];
}

export { createCombinations };
