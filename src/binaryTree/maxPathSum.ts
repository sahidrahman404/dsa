import { Node } from "./node";

function maxPathSumRecurse(root: Node<number> | null): number {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;
    const leftVals = maxPathSumRecurse(root.left);
    const rightVals = maxPathSumRecurse(root.right);
    return root.val + Math.max(leftVals, rightVals);
}

export { maxPathSumRecurse };
