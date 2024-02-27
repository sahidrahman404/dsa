import { describe, expect, test } from "vitest";
import { Node } from "./linkedlist";
import {
    reverseLinkedList,
    reverseLinkedListRecurse,
} from "./reverseLinkedList";

describe("reverse linked list", () => {
    test("reverse linked list 1", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        const f1 = new Node("f");
        const e1 = new Node("e");
        const d1 = new Node("d");
        const c1 = new Node("c");
        const b1 = new Node("b");
        const a1 = new Node("a");

        f1.next = e1;
        e1.next = d1;
        d1.next = c1;
        c1.next = b1;
        b1.next = a1;

        expect(reverseLinkedList(a)).toStrictEqual(f1);
    });

    test("reverse linked list recurse 2", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        const f1 = new Node("f");
        const e1 = new Node("e");
        const d1 = new Node("d");
        const c1 = new Node("c");
        const b1 = new Node("b");
        const a1 = new Node("a");

        f1.next = e1;
        e1.next = d1;
        d1.next = c1;
        c1.next = b1;
        b1.next = a1;

        expect(reverseLinkedListRecurse(a)).toStrictEqual(f1);
    });
});
