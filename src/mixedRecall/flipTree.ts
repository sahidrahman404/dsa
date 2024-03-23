import { Node } from "../binaryTree/node";

function flipTree(root: Node<string> | null): Node<string> | null {
    if (root === null) return null;

    const left = flipTree(root.left);
    const right = flipTree(root.right);
    root.left = right;
    root.right = left;

    return root;
}

export { flipTree };
