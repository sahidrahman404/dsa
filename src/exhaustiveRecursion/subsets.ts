function subsets(elements: string[], i: number = 0): string[][] {
    if (i >= elements.length) return [[]];
    const first = elements[i];
    const subsetsWithoutFirst = subsets(elements, i + 1);
    const subsetWithFirst: string[][] = [];
    for (const sub of subsetsWithoutFirst) {
        subsetWithFirst.push([first, ...sub]);
    }
    return [...subsetsWithoutFirst, ...subsetWithFirst];
}

const res = subsets(["a", "b"]); // ->

export { subsets };
