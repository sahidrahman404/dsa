import { Node } from "./node";

function treeMinValue(root: Node<number>): number {
    const queue = [root];
    let min = Infinity;
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr && curr.val < min) min = curr.val;
        if (curr?.right) queue.push(curr.right);
        if (curr?.left) queue.push(curr.left);
    }
    return min;
}

function treeMinValueRecurse(root: Node<number> | null): number {
    if (root === null) return Infinity;
    return Math.min(
        root.val,
        treeMinValueRecurse(root.right),
        treeMinValueRecurse(root.left),
    );
}

export { treeMinValue, treeMinValueRecurse };
