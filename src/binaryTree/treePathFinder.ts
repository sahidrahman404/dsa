import { Node } from "./node";

function pathFinder<T>(root: Node<T> | null, target: T): T[] | null {
    const result = pathFinderHelper(root, target);
    if (result === null) {
        return null;
    } else {
        return result.reverse();
    }
}

function pathFinderHelper<T>(root: Node<T> | null, target: T): T[] | null {
    if (root === null) return null;
    if (root.val === target) return [root.val];

    const leftPaths = pathFinderHelper(root.left, target);
    if (leftPaths !== null) {
        leftPaths.push(root.val);
        return leftPaths;
    }

    const rightPaths = pathFinderHelper(root.right, target);
    if (rightPaths !== null) {
        rightPaths.push(root.val);
        return rightPaths;
    }

    return null;
}

export { pathFinder };
