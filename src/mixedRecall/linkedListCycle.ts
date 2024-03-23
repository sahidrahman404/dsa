import { Node } from "./node";

function linkedListCycle(
    head: Node<string> | null,
    visited: Set<string> = new Set(),
): boolean {
    if (head === null) return false;
    if (visited.has(head.val)) return true;
    visited.add(head.val);
    return linkedListCycle(head.next, visited);
}

export { linkedListCycle };
