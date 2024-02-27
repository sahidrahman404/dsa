import { test, expect, describe } from "vitest";
import { removeNode, removeNodeRecurse } from "./removeNode";
import { Node } from "./linkedlist";

describe("remove node", () => {
    test("remove node 1", () => {
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

        const a1 = new Node("a");
        const b1 = new Node("b");
        const d1 = new Node("d");
        const e1 = new Node("e");
        const f1 = new Node("f");

        a1.next = b1;
        b1.next = d1;
        d1.next = e1;
        e1.next = f1;

        // a -> b -> c -> d -> e -> f

        expect(removeNode(a, "c")).toStrictEqual(a1);
        // a -> b -> d -> e -> f
    });
    test("remove node 2", () => {
        const x = new Node("x");
        const y = new Node("y");
        const z = new Node("z");

        x.next = y;
        y.next = z;

        // x -> y -> z
        //
        const x1 = new Node("x");
        const y1 = new Node("y");

        x1.next = y1;

        expect(removeNode(x, "z")).toStrictEqual(x1);
        // x -> y
    });
    test("remove node 3", () => {
        const q = new Node("q");
        const r = new Node("r");
        const s = new Node("s");

        q.next = r;
        r.next = s;

        // q -> r -> s

        const r1 = new Node("r");
        const s1 = new Node("s");

        r1.next = s1;

        expect(removeNode(q, "q")).toStrictEqual(r1);
        // r -> s
    });

    test("remove node 1 recurse", () => {
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

        const a1 = new Node("a");
        const b1 = new Node("b");
        const d1 = new Node("d");
        const e1 = new Node("e");
        const f1 = new Node("f");

        a1.next = b1;
        b1.next = d1;
        d1.next = e1;
        e1.next = f1;

        // a -> b -> c -> d -> e -> f

        expect(removeNodeRecurse(a, "c")).toStrictEqual(a1);
        // a -> b -> d -> e -> f
    });
    test("remove node 2 recurse", () => {
        const x = new Node("x");
        const y = new Node("y");
        const z = new Node("z");

        x.next = y;
        y.next = z;

        // x -> y -> z
        //
        const x1 = new Node("x");
        const y1 = new Node("y");

        x1.next = y1;

        expect(removeNodeRecurse(x, "z")).toStrictEqual(x1);
        // x -> y
    });
    test("remove node 3 recurse", () => {
        const q = new Node("q");
        const r = new Node("r");
        const s = new Node("s");

        q.next = r;
        r.next = s;

        // q -> r -> s

        const r1 = new Node("r");
        const s1 = new Node("s");

        r1.next = s1;

        expect(removeNodeRecurse(q, "q")).toStrictEqual(r1);
        // r -> s
    });
});
