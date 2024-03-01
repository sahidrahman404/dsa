import { describe, expect, test } from "vitest";
import { Node } from "./node";
import { treeValueCount } from "./treeValueCount";

describe("tree value count", () => {
    test("tree value count 1", () => {
        const a = new Node(12);
        const b = new Node(6);
        const c = new Node(6);
        const d = new Node(4);
        const e = new Node(6);
        const f = new Node(12);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      12
        //    /   \
        //   6     6
        //  / \     \
        // 4   6     12

        expect(treeValueCount(a, 6)).toBe(3); // ->
    });
    test("tree value count 1", () => {
        const a = new Node(12);
        const b = new Node(6);
        const c = new Node(6);
        const d = new Node(4);
        const e = new Node(6);
        const f = new Node(12);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      12
        //    /   \
        //   6     6
        //  / \     \
        // 4  6     12

        expect(treeValueCount(a, 12)).toBe(2); // ->
    });
    test("tree value count 1", () => {
        const a = new Node(7);
        const b = new Node(5);
        const c = new Node(1);
        const d = new Node(1);
        const e = new Node(8);
        const f = new Node(7);
        const g = new Node(1);
        const h = new Node(1);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        f.right = h;

        //      7
        //    /   \
        //   5     1
        //  / \     \
        // 1   8     7
        //    /       \
        //   1         1
        expect(treeValueCount(a, 1)).toBe(4); // ->
    });
});
