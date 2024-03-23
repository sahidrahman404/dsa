import { Node } from "../binaryTree/node";

function lowestCommonAncestor(
    root: Node<string> | null,
    valA: string,
    valB: string,
): string {
    const pathA = getPath(root, valA);
    const pathB = getPath(root, valB);
    for (let i = 0; i < pathA.length; i++) {
        for (let j = 0; j < pathB.length; j++) {
            if (pathA[i] === pathB[j]) {
                return pathA[i];
            }
        }
    }
    return "";
}

function getPath(root: Node<string> | null, target: string): string[] {
    if (root === null) return [];
    if (root.val === target) return [root.val];
    const leftPath = getPath(root.left, target);
    if (leftPath.length > 0) {
        leftPath.push(root.val);
        return leftPath;
    }
    const rightPath = getPath(root.right, target);
    if (rightPath.length > 0) {
        rightPath.push(root.val);
        return rightPath;
    }
    return [];
}

export { lowestCommonAncestor };
