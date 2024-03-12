function hasPath(
    graph: Record<string, string[]>,
    src: string,
    dest: string,
): boolean {
    const stack = [src];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node === dest) return true;
        if (node) {
            for (const neighbor of graph[node]) {
                stack.push(neighbor);
            }
        }
    }
    return false;
}

export { hasPath };
