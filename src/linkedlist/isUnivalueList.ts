import { Node } from "./linkedlist";

function isUnivalueList<T>(head: Node<T>): boolean {
    let curr: Node<T> | null = head;
    while (curr !== null) {
        if (curr.val !== head.val) {
            return false;
        }
        curr = curr.next;
    }
    return true;
}

function isUnivalueListRecurse<T>(
    head: Node<T> | null,
    shouldBe: T | null = null,
): boolean {
    if (head === null) return true;
    if (shouldBe !== null && head.val !== shouldBe) {
        return false;
    }
    return isUnivalueListRecurse(head.next, head.val);
}

export { isUnivalueList, isUnivalueListRecurse };
