function shortestPath(edges: string[][], start: string, dest: string): number {
    const graph = buildGraph(edges);
    const queue: { node: string; dist: number }[] = [{ node: start, dist: 0 }];
    const visited: Set<string> = new Set();
    while (queue.length > 0) {
        const current = queue.shift();
        if (current && !visited.has(current.node)) {
            const { node, dist } = current;
            if (node === dest) return dist;
            visited.add(node);
            for (const neighbor of graph[node]) {
                queue.push({ node: neighbor, dist: dist + 1 });
            }
        }
    }
    return -1;
}

function buildGraph(edges: string[][]): Record<string, string[]> {
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

export { shortestPath };
