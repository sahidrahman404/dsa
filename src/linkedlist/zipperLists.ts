import { Node, printLinkedList } from "./linkedlist";

function zipperLists<T>(head1: Node<T>, head2: Node<T>): Node<T> {
    let tail: Node<T> | null = head1;
    let curr1: Node<T> | null = head1.next;
    let curr2: Node<T> | null = head2;
    let count = 0;
    while (curr1 !== null && curr2 !== null) {
        if (tail !== null) {
            if (count % 2 === 0) {
                tail.next = curr2;
                curr2 = curr2.next;
            }

            if (count % 2 !== 0) {
                tail.next = curr1;
                curr1 = curr1.next;
            }
            tail = tail.next;
        }

        count++;
    }

    if (curr2 !== null && tail !== null) {
        tail.next = curr2;
    }

    if (curr1 !== null && tail !== null) {
        tail.next = curr1;
    }
    return head1;
}

function zipperListsRecurse<T>(
    head1: Node<T> | null,
    head2: Node<T> | null,
): Node<T> | null {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;
    const head1nxt = head1.next;
    const head2nxt = head2.next;
    head1.next = head2;
    head2.next = zipperListsRecurse(head1nxt, head2nxt);
    return head1;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

const m = zipperListsRecurse(a, x);
printLinkedList(m);
