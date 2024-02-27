import { Node } from "./linkedlist";

function addLists(
    head1: Node<number>,
    head2: Node<number>,
): Node<number> | null {
    let dummy: Node<number> = new Node(0);
    let tail: Node<number> = dummy;
    let curr1: Node<number> | null = head1;
    let curr2: Node<number> | null = head2;
    let carry = 0;

    while (curr1 !== null || curr2 !== null || carry === 1) {
        const val1 = curr1 === null ? 0 : curr1.val;
        const val2 = curr2 === null ? 0 : curr2.val;
        const sum = val1 + val2 + carry;

        carry = sum > 9 ? 1 : 0;
        const digit = sum % 10;

        tail.next = new Node(digit);
        tail = tail.next;

        if (curr1 !== null) curr1 = curr1.next;
        if (curr2 !== null) curr2 = curr2.next;
    }

    return dummy.next;
}

function addListsRecurse(
    head1: Node<number> | null,
    head2: Node<number> | null,
    carry: number = 0,
): Node<number> | null {
    if (head1 === null && head2 === null && carry === 0) return null;

    const val1 = head1 === null ? 0 : head1.val;
    const val2 = head2 === null ? 0 : head2.val;

    const sum = val1 + val2 + carry;
    const nextCarry = sum > 9 ? 1 : 0;
    const digit = sum % 10;

    const resultNode = new Node(digit);

    const next1 = head1 === null ? null : head1.next;
    const next2 = head2 === null ? null : head2.next;
    resultNode.next = addListsRecurse(next1, next2, nextCarry);
    return resultNode;
}

export { addLists, addListsRecurse };
