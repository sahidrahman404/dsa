import { describe, expect, test } from "vitest";
import { Node } from "./node";
import { treeMinValue, treeMinValueRecurse } from "./treeMinValue";

describe("tree min value", () => {
    test("tree min value 1", () => {
        const a = new Node(3);
        const b = new Node(11);
        const c = new Node(4);
        const d = new Node(4);
        const e = new Node(-2);
        const f = new Node(1);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f; // -> -2

        //       3
        //    /    \
        //   11     4
        //  / \      \
        // 4   -2     1

        expect(treeMinValue(a)).toBe(-2);
    });

    test("tree min value 2", () => {
        const a = new Node(5);
        const b = new Node(11);
        const c = new Node(3);
        const d = new Node(4);
        const e = new Node(14);
        const f = new Node(12);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f; // -> 3

        //       5
        //    /    \
        //   11     3
        //  / \      \
        // 4   14     12

        expect(treeMinValue(a)).toBe(3);
    });
    test("tree min value 3", () => {
        const a = new Node(-1);
        const b = new Node(-6);
        const c = new Node(-5);
        const d = new Node(-3);
        const e = new Node(-4);
        const f = new Node(-13);
        const g = new Node(-2);
        const h = new Node(-2);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        f.right = h; // -> -13

        //        -1
        //      /   \
        //    -6    -5
        //   /  \     \
        // -3   -4   -13
        //     /       \
        //    -2       -2

        expect(treeMinValue(a)).toBe(-13);
    });
    test("tree min value 4", () => {
        const a = new Node(42); // -> 42

        //        42

        expect(treeMinValue(a)).toBe(42);
    });
    test("tree min value 1 recurse", () => {
        const a = new Node(3);
        const b = new Node(11);
        const c = new Node(4);
        const d = new Node(4);
        const e = new Node(-2);
        const f = new Node(1);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f; // -> -2

        //       3
        //    /    \
        //   11     4
        //  / \      \
        // 4   -2     1

        expect(treeMinValueRecurse(a)).toBe(-2);
    });
    test("tree min value 2 recurse", () => {
        const a = new Node(5);
        const b = new Node(11);
        const c = new Node(3);
        const d = new Node(4);
        const e = new Node(14);
        const f = new Node(12);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f; // -> 3

        //       5
        //    /    \
        //   11     3
        //  / \      \
        // 4   14     12

        expect(treeMinValueRecurse(a)).toBe(3);
    });

    test("tree min value 3 recurse", () => {
        const a = new Node(-1);
        const b = new Node(-6);
        const c = new Node(-5);
        const d = new Node(-3);
        const e = new Node(-4);
        const f = new Node(-13);
        const g = new Node(-2);
        const h = new Node(-2);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        f.right = h; // -> -13

        //        -1
        //      /   \
        //    -6    -5
        //   /  \     \
        // -3   -4   -13
        //     /       \
        //    -2       -2

        expect(treeMinValueRecurse(a)).toBe(-13);
    });
    test("tree min value 4 recurse", () => {
        const a = new Node(42); // -> 42

        //        42

        expect(treeMinValueRecurse(a)).toBe(42);
    });
});
