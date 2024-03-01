import { Node } from "./node";

function depthFirstValues<T>(root: Node<T> | null): T[] {
    if (root === null) return [];
    const result: T[] = [];
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        if (current) result.push(current.val);
        if (current?.right) stack.push(current.right);
        if (current?.left) stack.push(current.left);
    }

    return result;
}

function depthFirstValuesRecurse<T>(root: Node<T> | null): T[] {
    if (root === null) return [];
    const leftVals = depthFirstValuesRecurse(root.left);
    const rightVals = depthFirstValuesRecurse(root.right);
    return [root.val, ...leftVals, ...rightVals];
}

export { depthFirstValues, depthFirstValuesRecurse };
