import { Node, printLinkedList } from "./linkedlist";

function mergeLists<T>(head1: Node<T>, head2: Node<T>): Node<T> | null {
    let dummy: Node<T> | null = new Node(head1.val);
    let tail: Node<T> | null = dummy;
    let curr1: Node<T> | null = head1;
    let curr2: Node<T> | null = head2;
    while (curr1 !== null && curr2 !== null && tail !== null) {
        if (curr1.val > curr2.val) {
            tail.next = curr2;
            curr2 = curr2.next;
        } else {
            tail.next = curr1;
            curr1 = curr1.next;
        }
        tail = tail.next;
    }

    if (tail !== null) {
        if (curr1 === null) tail.next = curr2;
        if (curr2 === null) tail.next = curr1;
    }
    return dummy.next;
}

function mergeListsRecurse<T>(
    head1: Node<T> | null,
    head2: Node<T> | null,
): Node<T> | null {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    if (head1.val < head2.val) {
        const next1 = head1.next;
        head1.next = mergeListsRecurse(next1, head2);
        return head1;
    } else {
        const next2 = head2.next;
        head2.next = mergeListsRecurse(head1, next2);
        return head2;
    }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

const m = mergeListsRecurse(a, q);
printLinkedList(m);

// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28
