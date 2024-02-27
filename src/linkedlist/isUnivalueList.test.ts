import { describe, expect, test } from "vitest";
import { isUnivalueList, isUnivalueListRecurse } from "./isUnivalueList";
import { Node } from "./linkedlist";

describe("is univalue list", () => {
    test("is univalue list 1", () => {
        const a = new Node(7);
        const b = new Node(7);
        const c = new Node(7);

        a.next = b;
        b.next = c;

        // 7 -> 7 -> 7

        expect(isUnivalueList(a)).toBe(true);
    });

    test("is univalue list recurse 1", () => {
        const a = new Node(7);
        const b = new Node(7);
        const c = new Node(7);

        a.next = b;
        b.next = c;

        // 7 -> 7 -> 7

        expect(isUnivalueListRecurse(a)).toBe(true);
    });

    test("is univalue list 2", () => {
        const a = new Node(7);
        const b = new Node(7);
        const c = new Node(4);

        a.next = b;
        b.next = c;

        // 7 -> 7 -> 4

        expect(isUnivalueList(a)).toBe(false);
    });

    test("is univalue list recurse 2", () => {
        const a = new Node(7);
        const b = new Node(7);
        const c = new Node(4);

        a.next = b;
        b.next = c;

        // 7 -> 7 -> 4

        expect(isUnivalueListRecurse(a)).toBe(false);
    });

    test("is univalue list 3", () => {
        const u = new Node(2);
        const v = new Node(2);
        const w = new Node(2);
        const x = new Node(2);
        const y = new Node(2);

        u.next = v;
        v.next = w;
        w.next = x;
        x.next = y;

        // 2 -> 2 -> 2 -> 2 -> 2

        expect(isUnivalueList(u)).toBe(true);
    });

    test("is univalue list recurse 3", () => {
        const u = new Node(2);
        const v = new Node(2);
        const w = new Node(2);
        const x = new Node(2);
        const y = new Node(2);

        u.next = v;
        v.next = w;
        w.next = x;
        x.next = y;

        // 2 -> 2 -> 2 -> 2 -> 2

        expect(isUnivalueListRecurse(u)).toBe(true);
    });
});
