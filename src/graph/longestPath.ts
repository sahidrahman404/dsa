function longestPath(graph: Record<string, string[]>) {
    const distance: Record<string, number> = {};
    for (const node in graph) {
        if (graph[node].length === 0) distance[node] = 0;
    }
    for (const node in graph) {
        traverseDistance(graph, node, distance);
    }
    return Math.max(...Object.values(distance));
}

function traverseDistance(
    graph: Record<string, string[]>,
    node: string,
    distance: Record<string, number>,
): number {
    if (node in distance) return distance[node];
    let maxLength = -Infinity;
    for (const neighbor of graph[node]) {
        const attempt = traverseDistance(graph, neighbor, distance);
        if (attempt > maxLength) maxLength = attempt;
    }
    distance[node] = 1 + maxLength;
    return distance[node];
}
const graph = {
    a: ["c", "b"],
    b: ["c"],
    c: [],
    q: ["r"],
    r: ["s", "u", "t"],
    s: ["t"],
    t: ["u"],
    u: [],
};

const size = longestPath(graph); // -> 2
console.log({ size });
export { longestPath };
