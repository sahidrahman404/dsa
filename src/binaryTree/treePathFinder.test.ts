import { describe, expect, test } from "vitest";
import { Node } from "./node";
import { pathFinder } from "./treePathFinder";

describe("tree path finder", () => {
    test("tree path finder 1", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f

        expect(pathFinder(a, "e")).toStrictEqual(["a", "b", "e"]); // ->
    });
    test("tree path finder 2", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f

        expect(pathFinder(a, "p")).toStrictEqual(null);
    });
    test("tree path finder 3", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");
        const g = new Node("g");
        const h = new Node("h");

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        f.right = h;

        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f
        //    /       \
        //   g         h

        expect(pathFinder(a, "c")).toStrictEqual(["a", "c"]); // ->
    });
    test("tree path finder 4", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");
        const g = new Node("g");
        const h = new Node("h");

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        f.right = h;

        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f
        //    /       \
        //   g         h

        expect(pathFinder(a, "h")).toStrictEqual(["a", "c", "f", "h"]); // ->
    });
    test("tree path finder 5", () => {
        const x = new Node("x");

        //      x

        expect(pathFinder(x, "x")).toStrictEqual(["x"]); // ->
    });
    test("tree path finder 6", () => {
        expect(pathFinder(null, "x")).toStrictEqual(null);
    });
    test("tree path finder 7", () => {
        const root = new Node(0);
        let curr = root;
        for (let i = 1; i <= 6000; i += 1) {
            curr.right = new Node(i);
            curr = curr.right;
        }

        //      0
        //       \
        //        1
        //         \
        //          2
        //           \
        //            3
        //             .
        //              .
        //               .
        //              5999
        //                \
        //                6000
        const expected = Array.from(Array(3452), (_, i) => i);

        expect(pathFinder(root, 3451)).toStrictEqual(expected); // ->
    });
});
