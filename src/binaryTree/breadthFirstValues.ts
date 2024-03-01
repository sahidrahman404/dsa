import { Node } from "./node";

function bfs<T>(root: Node<T>): T[] {
    if (root === null) return [];
    const result: T[] = [];
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current) result.push(current.val);
        if (current?.left) queue.push(current.left);
        if (current?.right) queue.push(current.right);
    }
    return result;
}

function bfsRecurse<T>(root: Node<T>): T[] {
    if (root === null) return [];
    const result: T[] = [];
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.pop();
        if (current) result.push(current.val);
        if (current?.left) queue.unshift(current.left);
        if (current?.right) queue.unshift(current.right);
    }
    return result;
}

export { bfs, bfsRecurse };
