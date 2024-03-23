import { describe, expect, test } from "vitest";
import { lowestCommonAncestor } from "./lowestCommonAncestor";
import { Node } from "../binaryTree/node";

describe("lowest common ancestor", () => {
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
    test("lowest common ancestor 1", () => {
        expect(lowestCommonAncestor(a, "d", "h")).toBe("b"); //
    });
    test("lowest common ancestor 2", () => {
        expect(lowestCommonAncestor(a, "d", "g")).toBe("b"); //
    });
    test("lowest common ancestor 3", () => {
        expect(lowestCommonAncestor(a, "g", "c")).toBe("a"); //
    });
    test("lowest common ancestor 4", () => {
        expect(lowestCommonAncestor(a, "b", "g")).toBe("b"); //
    });
    test("lowest common ancestor 5", () => {
        expect(lowestCommonAncestor(a, "f", "c")).toBe("c"); //
    });
});
