function semestersRequired(numCourses: number, prereqs: number[][]): number {
    const distance: Record<string, number> = {};
    const graph = traverseGraph(numCourses, prereqs);
    for (const node in graph) {
        if (graph[node].length === 0) distance[node] = 1;
    }
    for (const node in graph) {
        exploreDistance(graph, Number(node), distance);
    }
    return Math.max(...Object.values(distance));
}

function exploreDistance(
    graph: Record<string, number[]>,
    node: number,
    distance: Record<string, number>,
): number {
    if (node in distance) return distance[node];

    let size = -Infinity;
    for (const neighbor of graph[node]) {
        const attempt = exploreDistance(graph, neighbor, distance);
        if (attempt > size) size = attempt;
    }

    distance[node] = 1 + size;
    return distance[node];
}

function traverseGraph(
    numCourses: number,
    prereqs: number[][],
): Record<string, number[]> {
    const graph: Record<string, number[]> = {};

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (const [a, b] of prereqs) {
        graph[a].push(b);
    }

    return graph;
}

export { semestersRequired };
