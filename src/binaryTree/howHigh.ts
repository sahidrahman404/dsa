import { Node } from "./node";

function howHigh<T>(root: Node<T> | null): number {
    if (root === null) return -1;
    return 1 + Math.max(howHigh(root.left), howHigh(root.right));
}

export { howHigh };
