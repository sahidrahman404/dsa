import { Node } from "./node";

function allTreePaths<T>(root: Node<T> | null): T[][] {
    if (root === null) return [];
    if (root.left === null && root.right === null) return [[root.val]];
    const paths: T[][] = [];
    const leftSubPaths = allTreePaths(root.left);
    for (const subPaths of leftSubPaths) {
        paths.push([root.val, ...subPaths]);
    }
    const rightSubPaths = allTreePaths(root.right);
    for (const subPaths of rightSubPaths) {
        paths.push([root.val, ...subPaths]);
    }
    return paths;
}

export { allTreePaths };
