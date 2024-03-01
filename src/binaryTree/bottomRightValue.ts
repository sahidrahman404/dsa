import { Node } from "./node";

function bottomRightValue<T>(root: Node<T>): T | null {
    const queue = [root];
    let curr: Node<T> | null | undefined = null;
    while (queue.length > 0) {
        curr = queue.shift();
        if (curr?.left) queue.push(curr.left);
        if (curr?.right) queue.push(curr.right);
    }

    if (curr) {
        return curr.val;
    } else {
        return null;
    }
}
export { bottomRightValue };
