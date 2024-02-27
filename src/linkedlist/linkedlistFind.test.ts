import { describe, expect, test } from "vitest";
import { Node } from "./linkedlist";
import { linkedlistFind, linkedlistFindRecurse } from "./linkedlistFind";

describe("linked list find", () => {
    test("linked list find 1", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        expect(linkedlistFind(a, "c")).toBe(true); //
        expect(linkedlistFindRecurse(a, "c")).toBe(true); //
    });

    test("linked list find 2", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        expect(linkedlistFind(a, "d")).toBe(true); //
        expect(linkedlistFindRecurse(a, "d")).toBe(true); //
    });

    test("linked list find 3", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        expect(linkedlistFind(a, "q")).toBe(false); //
        expect(linkedlistFindRecurse(a, "q")).toBe(false); //
    });

    test("linked list find 4", () => {
        const node1 = new Node("jason");
        const node2 = new Node("leneli");

        node1.next = node2;

        // jason -> leneli

        expect(linkedlistFind(node1, "jason")).toBe(true); //
        expect(linkedlistFindRecurse(node1, "jason")).toBe(true); //
    });

    test("linked list find 5", () => {
        const node1 = new Node(42);

        // 42

        expect(linkedlistFind(node1, 42)).toBe(true); //
        expect(linkedlistFindRecurse(node1, 42)).toBe(true); //
    });
});
