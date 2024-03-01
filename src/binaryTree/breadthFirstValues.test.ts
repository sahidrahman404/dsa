import { describe, expect, test } from "vitest";
import { Node } from "./node";
import { bfs } from "./breadthFirstValues";

describe("bfs", () => {
    test("bfs 1", () => {
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

        expect(bfs(a)).toStrictEqual(["a", "b", "c", "d", "e", "f"]);
        //    ->
    });
    test("bfs 2", () => {
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

        expect(bfs(a)).toStrictEqual(["a", "b", "c", "d", "e", "f", "g", "h"]);
        //   ->
    });
    test("bfs 3", () => {
        const a = new Node("a");

        //      a

        expect(bfs(a)).toStrictEqual(["a"]);
        //    ->
    });

    test("bfs 1 recurse", () => {
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

        expect(bfs(a)).toStrictEqual(["a", "b", "c", "d", "e", "f"]);
        //    ->
    });
    test("bfs 2 recurse", () => {
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

        expect(bfs(a)).toStrictEqual(["a", "b", "c", "d", "e", "f", "g", "h"]);
        //   ->
    });
    test("bfs 3 recurse", () => {
        const a = new Node("a");

        //      a

        expect(bfs(a)).toStrictEqual(["a"]);
        //    ->
    });
});
