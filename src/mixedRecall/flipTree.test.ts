import { describe, expect, test } from "vitest";
import { Node } from "../binaryTree/node";
import { flipTree } from "./flipTree";

describe("flip tree", () => {
    test("flip tree 1", () => {
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
        e.right = h;

        //      a
        //    /    \
        //   b      c
        //  / \      \
        // d   e      f
        //    / \
        //    g  h

        const a1 = new Node("a");
        const b1 = new Node("b");
        const c1 = new Node("c");
        const d1 = new Node("d");
        const e1 = new Node("e");
        const f1 = new Node("f");
        const g1 = new Node("g");
        const h1 = new Node("h");

        a1.left = c1;
        a1.right = b1;
        b1.left = e1;
        b1.right = d1;
        c1.left = f1;
        e1.left = h1;
        e1.right = g1;

        expect(flipTree(a)).toStrictEqual(a1);

        //       a
        //    /    \
        //   c      b
        //  /     /   \
        // f     e    d
        //     /  \
        //    h    g
    });
    test("flip tree 2", () => {
        const u = new Node("u");
        const t = new Node("t");
        const s = new Node("s");
        const r = new Node("r");
        const q = new Node("q");
        const p = new Node("p");

        u.left = t;
        u.right = s;
        s.right = r;
        r.left = q;
        r.right = p;

        //     u
        //  /    \
        // t      s
        //         \
        //         r
        //        / \
        //        q  p

        const u1 = new Node("u");
        const t1 = new Node("t");
        const s1 = new Node("s");
        const r1 = new Node("r");
        const q1 = new Node("q");
        const p1 = new Node("p");

        u1.left = s1;
        u1.right = t1;
        s1.left = r1;
        r1.left = p1;
        r1.right = q1;

        expect(flipTree(u)).toStrictEqual(u1);

        //           u
        //        /    \
        //       s      t
        //      /
        //     r
        //    / \
        //   p  q
    });
    test("flip tree 3", () => {
        const l = new Node("l");
        const m = new Node("m");
        const n = new Node("n");
        const o = new Node("o");
        const p = new Node("p");
        const q = new Node("q");
        const r = new Node("r");
        const s = new Node("s");
        const t = new Node("t");

        l.left = m;
        l.right = n;
        n.left = o;
        n.right = p;
        o.left = q;
        o.right = r;
        p.left = s;
        p.right = t;

        //        l
        //     /     \
        //    m       n
        //         /    \
        //         o     p
        //        / \   / \
        //       q   r s   t

        const l1 = new Node("l");
        const m1 = new Node("m");
        const n1 = new Node("n");
        const o1 = new Node("o");
        const p1 = new Node("p");
        const q1 = new Node("q");
        const r1 = new Node("r");
        const s1 = new Node("s");
        const t1 = new Node("t");

        l1.left = n1;
        l1.right = m1;
        n1.left = p1;
        n1.right = o1;
        o1.left = r1;
        o1.right = q1;
        p1.left = t1;
        p1.right = s1;

        expect(flipTree(l)).toStrictEqual(l1);
        //             l
        //         /      \
        //        n        m
        //      /  \
        //    p     o
        //  / \    / \
        // t   s  r   q
    });
});
