import { expect, test, describe } from "vitest";
import { Node } from "./linkedlist";
import { insertNode, insertNodeRecurse } from "./insertNode";

describe("insert node", () => {
    test("insert node 1 (middle)", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        const a1 = new Node("a");
        const b1 = new Node("b");
        const c1 = new Node("c");
        const d1 = new Node("d");
        const x1 = new Node("x");

        a1.next = b1;
        b1.next = x1;
        x1.next = c1;
        c1.next = d1;
        // a -> b -> x -> c -> d
        expect(insertNode(a, "x", 2)).toStrictEqual(a1);
    });
    test("insert node 2 (end)", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        const a1 = new Node("a");
        const b1 = new Node("b");
        const c1 = new Node("c");
        const d1 = new Node("d");
        const v1 = new Node("v");

        a1.next = b1;
        b1.next = c1;
        c1.next = d1;
        d1.next = v1;
        // a -> b -> c -> d -> v
        expect(insertNode(a, "v", 4)).toStrictEqual(a1);
    });

    test("insert node 2 (beginning)", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        const a1 = new Node("a");
        const b1 = new Node("b");
        const c1 = new Node("c");
        const d1 = new Node("d");
        const v1 = new Node("v");

        v1.next = a1;
        a1.next = b1;
        b1.next = c1;
        c1.next = d1;
        // v -> a -> b -> c -> d
        expect(insertNode(a, "v", 0)).toStrictEqual(v1);
    });

    test("insert node 1 (middle) recurse", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        const a1 = new Node("a");
        const b1 = new Node("b");
        const c1 = new Node("c");
        const d1 = new Node("d");
        const x1 = new Node("x");

        a1.next = b1;
        b1.next = x1;
        x1.next = c1;
        c1.next = d1;
        // a -> b -> x -> c -> d
        expect(insertNodeRecurse(a, "x", 2)).toStrictEqual(a1);
    });
    test("insert node 2 (end) recurse", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        const a1 = new Node("a");
        const b1 = new Node("b");
        const c1 = new Node("c");
        const d1 = new Node("d");
        const v1 = new Node("v");

        a1.next = b1;
        b1.next = c1;
        c1.next = d1;
        d1.next = v1;
        // a -> b -> c -> d -> v
        expect(insertNodeRecurse(a, "v", 4)).toStrictEqual(a1);
    });

    test("insert node 2 (beginning) recurse", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        const a1 = new Node("a");
        const b1 = new Node("b");
        const c1 = new Node("c");
        const d1 = new Node("d");
        const v1 = new Node("v");

        v1.next = a1;
        a1.next = b1;
        b1.next = c1;
        c1.next = d1;
        // v -> a -> b -> c -> d
        expect(insertNodeRecurse(a, "v", 0)).toStrictEqual(v1);
    });
});
