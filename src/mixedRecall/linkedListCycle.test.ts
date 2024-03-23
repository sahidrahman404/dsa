import { describe, expect, test } from "vitest";
import { linkedListCycle } from "./linkedListCycle";
import { Node } from "./node";

describe("linked list cycle", () => {
    test("linked list cycle 1", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = b; // cycle

        //         _______
        //       /        \
        // a -> b -> c -> d

        expect(linkedListCycle(a)).toBe(true); //
    });
    test("linked list cycle 2", () => {
        const q = new Node("q");
        const r = new Node("r");
        const s = new Node("s");
        const t = new Node("t");
        const u = new Node("u");

        q.next = r;
        r.next = s;
        s.next = t;
        t.next = u;
        u.next = q; // cycle

        //    ________________
        //  /                 \
        // q -> r -> s -> t -> u

        expect(linkedListCycle(q)).toBe(true); //
    });
    test("linked list cycle 3", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        expect(linkedListCycle(a)).toBe(false); //
    });
});
