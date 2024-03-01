import { Node } from "./node";

function treeValueCount<T>(root: Node<T> | null, target: number): number {
    if (root === null) return 0;
    return (
        (root.val === target ? 1 : 0) +
        treeValueCount(root.left, target) +
        treeValueCount(root.right, target)
    );
}

export { treeValueCount };
