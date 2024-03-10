import { describe, expect, test } from "vitest";
import { Node } from "./node";
import { levelAverages } from "./levelAverages";

describe("level averages", () => {
    test("level averages 1", () => {
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

        expect(levelAverages(a)).toStrictEqual([3, 7.5, 1]); // ->
    });
    test("level averages 2", () => {
        const a = new Node(-1);
        const b = new Node(-6);
        const c = new Node(-5);
        const d = new Node(-3);
        const e = new Node(0);
        const f = new Node(45);
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
        // -3   0     45
        //     /       \
        //    -1       -2

        expect(levelAverages(a)).toStrictEqual([-1, -5.5, 14, -1.5]); // ->
    });
    test("level averages 3", () => {
        const q = new Node(13);
        const r = new Node(4);
        const s = new Node(2);
        const t = new Node(9);
        const u = new Node(2);
        const v = new Node(42);

        q.left = r;
        q.right = s;
        r.right = t;
        t.left = u;
        u.right = v;

        //        13
        //      /   \
        //     4     2
        //      \
        //       9
        //      /
        //     2
        //    /
        //   42

        expect(levelAverages(q)).toStrictEqual([13, 3, 9, 2, 42]); // ->
    });
    test("level averages 4", () => {
        expect(levelAverages(null)).toStrictEqual([]); // ->
    });
});
