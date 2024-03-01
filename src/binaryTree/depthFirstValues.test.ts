import { describe, expect, test } from "vitest";
import { Node } from "./node";
import { depthFirstValues, depthFirstValuesRecurse } from "./depthFirstValues";

describe("depth first search", () => {
    test("dfs 1", () => {
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

        expect(depthFirstValues(a)).toStrictEqual([
            "a",
            "b",
            "d",
            "e",
            "c",
            "f",
        ]);
        //    ->
    });
    test("dfs 2", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");
        const g = new Node("g");

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;

        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f
        //    /
        //   g

        expect(depthFirstValues(a)).toStrictEqual([
            "a",
            "b",
            "d",
            "e",
            "g",
            "c",
            "f",
        ]);
        //    ->
    });
    test("dfs 3", () => {
        const a = new Node("a");
        //      a
        expect(depthFirstValues(a)).toStrictEqual(["a"]);
        //    ->
    });
    test("dfs 4", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");

        a.right = b;
        b.left = c;
        c.right = d;
        d.right = e;

        //      a
        //       \
        //        b
        //       /
        //      c
        //       \
        //        d
        //         \
        //          e

        expect(depthFirstValues(a)).toStrictEqual(["a", "b", "c", "d", "e"]);
        //    ->
    });

    test("dfs 5", () => {
        depthFirstValues(null);
        //    -> []
    });

    test("dfs 1 recurse", () => {
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

        expect(depthFirstValuesRecurse(a)).toStrictEqual([
            "a",
            "b",
            "d",
            "e",
            "c",
            "f",
        ]);
        //    ->
    });
    test("dfs 2 recurse", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");
        const g = new Node("g");

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;

        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f
        //    /
        //   g

        expect(depthFirstValuesRecurse(a)).toStrictEqual([
            "a",
            "b",
            "d",
            "e",
            "g",
            "c",
            "f",
        ]);
        //    ->
    });
    test("dfs 3 recurse", () => {
        const a = new Node("a");
        //      a
        expect(depthFirstValuesRecurse(a)).toStrictEqual(["a"]);
        //    ->
    });
    test("dfs 4 recurse", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");

        a.right = b;
        b.left = c;
        c.right = d;
        d.right = e;

        //      a
        //       \
        //        b
        //       /
        //      c
        //       \
        //        d
        //         \
        //          e

        expect(depthFirstValuesRecurse(a)).toStrictEqual([
            "a",
            "b",
            "c",
            "d",
            "e",
        ]);
        //    ->
    });

    test("dfs 5 recurse", () => {
        depthFirstValuesRecurse(null);
        //    -> []
    });
});
