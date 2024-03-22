import { describe, expect, test } from "vitest";
import { linkedPalindrome } from "./linkedPalindrome";
import { Node } from "./node";

describe("linked palindrome", () => {
    test("linked palindrome 1", () => {
        const a = new Node(3);
        const b = new Node(2);
        const c = new Node(7);
        const d = new Node(7);
        const e = new Node(2);
        const f = new Node(3);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        // 3 -> 2 -> 7 -> 7 -> 2 -> 3
        expect(linkedPalindrome(a)).toBe(true); //
    });
    test("linked palindrome 2", () => {
        const a = new Node(3);
        const b = new Node(2);
        const c = new Node(4);

        a.next = b;
        b.next = c;

        // 3 -> 2 -> 4
        expect(linkedPalindrome(a)).toBe(false); //
    });
    test("linked palindrome 3", () => {
        const a = new Node(3);
        const b = new Node(2);
        const c = new Node(3);

        a.next = b;
        b.next = c;

        // 3 -> 2 -> 3
        expect(linkedPalindrome(a)).toBe(true); //
    });
    test("linked palindrome 4", () => {
        const a = new Node(0);
        const b = new Node(1);
        const c = new Node(0);
        const d = new Node(1);
        const e = new Node(0);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;

        // 0 -> 1 -> 0 -> 1 -> 0
        expect(linkedPalindrome(a)).toBe(true); //
    });
});
