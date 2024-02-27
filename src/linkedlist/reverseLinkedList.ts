import { Node } from "./linkedlist";

function reverseLinkedList<T>(head: Node<T>): Node<T> | null {
    let prev: Node<T> | null = null;
    let curr: Node<T> | null = head;
    while (curr !== null) {
        const next: Node<T> | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function reverseLinkedListRecurse<T>(
    head: Node<T> | null,
    prev: Node<T> | null = null,
): Node<T> | null {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedListRecurse(next, head);
}

export { reverseLinkedList, reverseLinkedListRecurse };
