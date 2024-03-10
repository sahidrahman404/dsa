import { Node } from "./node";

function levelAverages(root: Node<number> | null): number[] {
    const levels: number[][] = [];
    fillLevels(root, levels, 0);
    return levels.map(averages);
}

function averages(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function fillLevels(
    root: Node<number> | null,
    levels: number[][],
    levelNum: number,
): void {
    if (root === null) return;

    if (levels.length === levelNum) {
        levels.push([root.val]);
    } else {
        levels[levelNum].push(root.val);
    }

    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
}

export { levelAverages };
