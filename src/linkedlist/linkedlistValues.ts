import { Node } from "./linkedlist";

function linkedlistValues<T>(head: Node<T> | null): T[] {
    let curr: Node<T> | null = head;
    const result: T[] = [];
    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}

function linkedlistValuesRecurse<T>(
    head: Node<T> | null,
    arr: T[],
): T[] | void {
    if (head === null) {
        return arr;
    }
    arr.push(head.val);
    return linkedlistValuesRecurse(head.next, arr);
}

export { linkedlistValues, linkedlistValuesRecurse };
