import { Node } from "./linkedlist";

function linkedlistFind<T>(head: Node<T>, target: T): boolean {
    let curr: Node<T> | null = head;
    while (curr !== null) {
        if (curr.val === target) {
            return true;
        }
        curr = curr.next;
    }
    return false;
}

function linkedlistFindRecurse<T>(head: Node<T> | null, target: T): boolean {
    if (head === null) return false;
    if (head.val === target) return true;
    return linkedlistFindRecurse(head.next, target);
}

export { linkedlistFind, linkedlistFindRecurse };
