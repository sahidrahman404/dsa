import { describe, expect, test } from "vitest";
import { Node } from "./node";
import { allTreePaths } from "./allTreePaths";

describe("all tree paths", () => {
    test("all tree paths 1", () => {
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

        expect(allTreePaths(a)).toStrictEqual([
            ["a", "b", "d"],
            ["a", "b", "e"],
            ["a", "c", "f"],
        ]); // ->
    });
    test("all tree paths 2", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");
        const g = new Node("g");
        const h = new Node("h");
        const i = new Node("i");

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        e.right = h;
        f.left = i;

        //         a
        //      /    \
        //     b      c
        //   /  \      \
        //  d    e      f
        //      / \    /
        //     g  h   i

        expect(allTreePaths(a)).toStrictEqual([
            ["a", "b", "d"],
            ["a", "b", "e", "g"],
            ["a", "b", "e", "h"],
            ["a", "c", "f", "i"],
        ]); // ->
    });
    test("all tree paths 3", () => {
        const q = new Node("q");
        const r = new Node("r");
        const s = new Node("s");
        const t = new Node("t");
        const u = new Node("u");
        const v = new Node("v");

        q.left = r;
        q.right = s;
        r.right = t;
        t.left = u;
        u.right = v;

        //      q
        //    /   \
        //   r     s
        //    \
        //     t
        //    /
        //   u
        //  /
        // v

        expect(allTreePaths(q)).toStrictEqual([
            ["q", "r", "t", "u", "v"],
            ["q", "s"],
        ]); // ->
    });
    test("all tree paths 4", () => {
        const z = new Node("z");

        //      z

        expect(allTreePaths(z)).toStrictEqual([["z"]]); // ->
    });
});
