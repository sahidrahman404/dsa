function largestComponent(graph: Record<string, string[]>) {
    let largestCount = 0;
    let currentCount = 0;
    const visited: Set<string> = new Set();

    for (const node in graph) {
        currentCount = explore(graph, node, visited);
        if (currentCount > largestCount) largestCount = currentCount;
    }

    return largestCount;
}

function explore(
    graph: Record<string, string[]>,
    current: string,
    visited: Set<string>,
): number {
    if (visited.has(current)) return 0;
    visited.add(current);

    let size = 1;

    for (const neighbor of graph[current]) {
        size += explore(graph, neighbor, visited);
    }

    return size;
}

export { largestComponent };
