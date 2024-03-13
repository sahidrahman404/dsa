function undirectedPath(edges: string[][], a: string, b: string): boolean {
    const graph = convertEdgesToGraph(edges);
    const stack = [a];
    const visited = new Set();
    visited.add(a);

    while (stack.length > 0) {
        const node = stack.pop();
        if (node === b) return true;
        if (node) {
            visited.add(node);
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) stack.push(neighbor);
            }
        }
    }
    return false;
}

function undirectedPathRecurse(
    edges: string[][],
    a: string,
    b: string,
): boolean {
    const graph = convertEdgesToGraph(edges);

    return hasPath(graph, a, b);
}

function hasPath(
    graph: Record<string, string[]>,
    src: string,
    dst: string,
    visited: Set<string> = new Set(),
): boolean {
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    for (const neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited)) return true;
    }

    return false;
}

function convertEdgesToGraph(edges: string[][]): Record<string, string[]> {
    const graph: Record<string, string[]> = {};
    for (const edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

export { undirectedPath, undirectedPathRecurse };
