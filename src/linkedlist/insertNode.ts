import { Node } from "./linkedlist";

function insertNode<T>(head: Node<T>, val: T, index: number): Node<T> {
    if (index === 0) {
        const newNode = new Node(val);
        newNode.next = head;
        return newNode;
    }
    let curr: Node<T> | null = head;
    let count = 0;
    while (curr !== null) {
        if (count === index - 1) {
            const newNode = new Node(val);
            const nxt = curr.next;
            curr.next = newNode;
            newNode.next = nxt;
            break;
        }
        count++;
        curr = curr.next;
    }
    return head;
}

function insertNodeRecurse<T>(
    head: Node<T> | null,
    val: T,
    index: number,
    count: number = 0,
): Node<T> | null {
    if (head === null) return null;
    if (index === 0) {
        const newNode = new Node(val);
        newNode.next = head;
        return newNode;
    }
    if (count === index - 1) {
        const newNode = new Node(val);
        const nxt = head.next;
        head.next = newNode;
        newNode.next = nxt;
        return head;
    }
    insertNodeRecurse(head.next, val, index, count + 1);
    return head;
}
export { insertNode, insertNodeRecurse };
