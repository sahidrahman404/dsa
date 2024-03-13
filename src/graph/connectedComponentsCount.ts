function connectedComponentsCount(graph: Record<number, number[]>): number {
    let count = 0;
    const visited: Set<number> = new Set();

    for (const node in graph) {
        if (explore(graph, Number(node), visited) === true) {
            count++;
        }
    }

    return count;
}

function explore(
    graph: Record<number, number[]>,
    current: number,
    visited: Set<number>,
): boolean {
    if (visited.has(current)) return false;
    visited.add(current);
    for (const neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }
    return true;
}

export { connectedComponentsCount };
