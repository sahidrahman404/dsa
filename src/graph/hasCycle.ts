function hasCycle(graph: Record<string, string[]>): boolean {
    const visiting: Set<string> = new Set();
    const visited: Set<string> = new Set();
    for (const node in graph) {
        const hasCycle = cycleDetect(graph, node, visiting, visited);
        if (hasCycle === true) {
            return true;
        }
    }
    return false;
}

function cycleDetect(
    graph: Record<string, string[]>,
    node: string,
    visiting: Set<string>,
    visited: Set<string>,
): boolean {
    if (visited.has(node)) return false;
    if (visiting.has(node)) return true;
    visiting.add(node);
    for (const neighbor of graph[node]) {
        if (cycleDetect(graph, neighbor, visiting, visited) === true) {
            return true;
        }
    }

    visiting.delete(node);
    visited.add(node);
    return false;
}

export { hasCycle };
