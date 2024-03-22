import { describe, expect, test } from "vitest";
import { middleValue } from "./middleValue";
import { Node } from "./node";

describe("middle Value", () => {
    test("middle Value 1", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;

        // a -> b -> c -> d -> e
        expect(middleValue(a)).toBe("c"); //
    });
    test("middle Value 2", () => {
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

        // a -> b -> c -> d -> e -> f
        expect(middleValue(a)).toBe("d"); //
    });
    test("middle Value 3", () => {
        const x = new Node("x");
        const y = new Node("y");
        const z = new Node("z");

        x.next = y;
        y.next = z;

        // x -> y -> z
        expect(middleValue(x)).toBe("y"); //
    });
});
