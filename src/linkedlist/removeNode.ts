import { Node } from "./linkedlist";

function removeNode<T>(head: Node<T>, target: T): Node<T> | null {
    if (head.val === target) {
        return head.next;
    }
    let prev: Node<T> | null = null;
    let curr: Node<T> | null = head;
    while (curr !== null) {
        if (prev !== null && curr.val === target) {
            prev.next = curr.next;
            break;
        }
        prev = curr;
        curr = curr.next;
    }

    return head;
}

function removeNodeRecurse<T>(head: Node<T> | null, target: T): Node<T> | null {
    if (head === null) return null;
    if (head.val === target) return head.next;
    head.next = removeNodeRecurse(head.next, target);
    return head;
}

export { removeNode, removeNodeRecurse };
