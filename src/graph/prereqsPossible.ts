function prereqsPossible(numCourses: number, prereqs: number[][]): boolean {
    const graph = buildGraph(numCourses, prereqs);
    const visited: Set<number> = new Set();
    const visiting: Set<number> = new Set();
    for (const node in graph) {
        if (checkCycle(graph, Number(node), visiting, visited) === true) {
            return false;
        }
    }
    return true;
}

function checkCycle(
    graph: Record<string, number[]>,
    node: number,
    visiting: Set<number>,
    visited: Set<number>,
): boolean {
    if (visited.has(node)) return false;
    if (visiting.has(node)) return true;
    visiting.add(node);
    for (const neighbor of graph[node]) {
        if (checkCycle(graph, neighbor, visiting, visited) === true) {
            return true;
        }
    }

    visiting.delete(node);
    visited.add(node);
    return false;
}

function buildGraph(
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

export { prereqsPossible };
