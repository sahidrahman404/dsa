import { describe, expect, test } from "vitest";
import { Node } from "./node";
import { bottomRightValue } from "./bottomRightValue";

describe("bottom right value", () => {
    test("bottom right value 1", () => {
        const a = new Node(3);
        const b = new Node(11);
        const c = new Node(10);
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
        //   11     10
        //  / \      \
        // 4   -2     1

        expect(bottomRightValue(a)).toBe(1); // ->
    });
    test("bottom right value 2", () => {
        const a = new Node(-1);
        const b = new Node(-6);
        const c = new Node(-5);
        const d = new Node(-3);
        const e = new Node(-4);
        const f = new Node(-13);
        const g = new Node(-2);
        const h = new Node(6);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        e.right = h;

        //        -1
        //      /   \
        //    -6    -5
        //   /  \     \
        // -3   -4   -13
        //     / \
        //    -2  6

        expect(bottomRightValue(a)).toBe(6); // ->
    });
    test("bottom right value 3", () => {
        const a = new Node(-1);
        const b = new Node(-6);
        const c = new Node(-5);
        const d = new Node(-3);
        const e = new Node(-4);
        const f = new Node(-13);
        const g = new Node(-2);
        const h = new Node(6);
        const i = new Node(7);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        e.right = h;
        f.left = i;

        //        -1
        //      /   \
        //    -6    -5
        //   /  \     \
        // -3   -4   -13
        //     / \    /
        //    -2  6  7

        expect(bottomRightValue(a)).toBe(7); // ->
    });
});
