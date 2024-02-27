import { Node } from "./linkedlist";

function sumList(head: Node<number> | null): number {
    let sum = 0;
    let curr = head;
    while (curr !== null) {
        sum += curr.val;
        curr = curr.next!;
    }
    return sum;
}

function sumListRecurse(head: Node<number> | null): number {
    if (head === null) return 0;
    return head.val + sumListRecurse(head.next);
}

export { sumList, sumListRecurse };
