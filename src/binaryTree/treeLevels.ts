import { Node } from "./node";

type Stack<T> = {
    node: Node<T>;
    lvl: number;
};

function treeLevels<T>(root: Node<T> | null): T[][] {
    if (root === null) return [];
    const stack: Stack<T>[] = [{ node: root, lvl: 0 }];
    const levels: T[][] = [];
    while (stack.length > 0) {
        const curr = stack.pop();
        if (curr && !levels[curr.lvl]) levels[curr.lvl] = [];
        if (curr && levels[curr.lvl]) levels[curr.lvl].push(curr.node.val);
        if (curr?.node.right)
            stack.push({ node: curr.node.right, lvl: curr.lvl + 1 });
        if (curr?.node.left)
            stack.push({ node: curr.node.left, lvl: curr.lvl + 1 });
    }
    return levels;
}

export { treeLevels };
