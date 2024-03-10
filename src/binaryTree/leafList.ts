import { Node } from "./node";

function leafList<T>(root: Node<T> | null, result: T[] = []): T[] {
    if (root === null) return [];
    if (root.left === null && root.right === null) {
        result.push(root.val);
    }
    leafList(root.left, result);
    leafList(root.right, result);
    return result;
}

export { leafList };
