import { describe, expect, test } from "vitest";
import { Node } from "./node";
import { maxPathSumRecurse } from "./maxPathSum";

describe("max path sum", () => {
    test("max path sum 1 recurse", () => {
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
        c.right = f;

        //       3
        //    /    \
        //   11     4
        //  / \      \
        // 4   -2     1

        expect(maxPathSumRecurse(a)).toBe(18); // ->
    });
    test("max path sum 2 recurse", () => {
        const a = new Node(5);
        const b = new Node(11);
        const c = new Node(54);
        const d = new Node(20);
        const e = new Node(15);
        const f = new Node(1);
        const g = new Node(3);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        e.left = f;
        e.right = g;

        //        5
        //     /    \
        //    11    54
        //  /   \
        // 20   15
        //      / \
        //     1  3

        expect(maxPathSumRecurse(a)).toBe(59); // ->
    });
    test("max path sum 3 resurse", () => {
        const a = new Node(-1);
        const b = new Node(-6);
        const c = new Node(-5);
        const d = new Node(-3);
        const e = new Node(0);
        const f = new Node(-13);
        const g = new Node(-1);
        const h = new Node(-2);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        f.right = h;

        //        -1
        //      /   \
        //    -6    -5
        //   /  \     \
        // -3   0    -13
        //     /       \
        //    -1       -2

        expect(maxPathSumRecurse(a)).toBe(-8); // -> -
    });
    test("max path sum 4 recurse", () => {
        const a = new Node(42);

        //        42

        expect(maxPathSumRecurse(a)).toBe(42); // ->
    });
});
