function permutations(items: string[], i: number = 0): string[][] {
    if (i >= items.length) return [[]];

    const first = items[i];
    const perms = permutations(items, i + 1);
    const fullPermutation = [];
    for (const perm of perms) {
        for (let i = 0; i <= perm.length; i++) {
            fullPermutation.push([
                ...perm.slice(0, i),
                first,
                ...perm.slice(i),
            ]);
        }
    }
    return fullPermutation;
}

export { permutations };
