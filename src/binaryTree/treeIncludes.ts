import { Node } from "./node";

function treeIncludes<T>(root: Node<T> | null, target: T): boolean {
    if (root === null) return false;
    const stack = [root];
    while (stack.length > 0) {
        const curr = stack.pop();
        if (curr && curr.val === target) return true;
        if (curr?.left) stack.push(curr.left);
        if (curr?.right) stack.push(curr.right);
    }
    return false;
}

function treeIncludesRecurse<T>(root: Node<T> | null, target: T): boolean {
    if (root === null) return false;
    if (root.val === target) return true;
    const rightRes = treeIncludesRecurse(root.right, target);
    const leftRes = treeIncludesRecurse(root.left, target);

    return rightRes || leftRes;
}

export { treeIncludes, treeIncludesRecurse };
