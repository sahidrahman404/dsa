function topologicalOrder(graph: Record<string, string[]>) {
    const numParents: Record<string, number> = {};
    for (const node in graph) {
        numParents[node] = 0;
    }

    for (const node in graph) {
        for (const child of graph[node]) {
            numParents[child]++;
        }
    }
    const ready: string[] = [];
    for (const parent in numParents) {
        if (numParents[parent] === 0) {
            ready.push(parent);
        }
    }

    const order: string[] = [];
    while (ready.length > 0) {
        const node = ready.pop();
        if (node !== undefined) {
            order.push(node);
            for (const child of graph[node]) {
                numParents[child]--;
                if (numParents[child] === 0) {
                    ready.push(child);
                }
            }
        }
    }
    return order;
}

export { topologicalOrder };
