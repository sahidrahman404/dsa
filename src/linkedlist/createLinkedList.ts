import { Node, printLinkedList } from "./linkedlist";

function createLinkedList<T>(vals: T[]): Node<T> | null {
    const dummy = new Node(vals[0]);
    let tail: Node<T> = dummy;
    for (const val of vals) {
        const newNode = new Node(val);
        tail.next = newNode;
        tail = tail.next;
    }
    return dummy.next;
}

function createLinkedListRecurse<T>(
    vals: T[],
    tail: Node<T> | null = null,
): Node<T> | null {
    if (vals.length === 0 && tail !== null) {
        return tail;
    }
    if (tail === null) {
        const [val, ...rest] = vals;
        const newNode = new Node(val);
        return createLinkedListRecurse(rest, newNode);
    }
    const [val, ...rest] = vals;
    const newNode = new Node(val);
    tail.next = createLinkedListRecurse(rest, newNode);
    return tail;
}

const m = createLinkedListRecurse(["h", "e", "y"]);
//@ts-ignore
printLinkedList(m);
