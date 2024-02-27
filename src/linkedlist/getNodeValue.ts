import { Node } from "./linkedlist";

function getNodeValue<T>(head: Node<T>, i: number): T | null {
    let curr: Node<T> | null = head;
    while (curr !== null) {
        if (i === 0) {
            return curr.val;
        }
        i--;
        curr = curr.next;
    }
    return null;
}

function getNodeValueRecurse<T>(head: Node<T> | null, i: number): T | null {
    if (head === null) return null;
    if (i === 0) return head.val;
    i--;
    return getNodeValueRecurse(head.next, i);
}

export { getNodeValue, getNodeValueRecurse };
