import { describe, test, expect } from "vitest";
import { Node } from "./linkedlist";
import { longestStreak, longestStreakRecurse } from "./longestStreak";

describe("longest streak", () => {
    test("longest streak 1", () => {
        const a = new Node(5);
        const b = new Node(5);
        const c = new Node(7);
        const d = new Node(7);
        const e = new Node(7);
        const f = new Node(6);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        // 5 -> 5 -> 7 -> 7 -> 7 -> 6

        expect(longestStreak(a)).toBe(3); //
    });
    test("longest streak 2", () => {
        const a = new Node(3);
        const b = new Node(3);
        const c = new Node(3);
        const d = new Node(3);
        const e = new Node(9);
        const f = new Node(9);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        // 3 -> 3 -> 3 -> 3 -> 9 -> 9

        expect(longestStreak(a)).toBe(4); //
    });
    test("longest streak 3", () => {
        const a = new Node(9);
        const b = new Node(9);
        const c = new Node(1);
        const d = new Node(9);
        const e = new Node(9);
        const f = new Node(9);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        // 9 -> 9 -> 1 -> 9 -> 9 -> 9

        expect(longestStreak(a)).toBe(3); //
    });
    test("longest streak 4", () => {
        const a = new Node(5);
        const b = new Node(5);

        a.next = b;

        // 5 -> 5

        expect(longestStreak(a)).toBe(2); //
    });

    test("longest streak 5", () => {
        const a = new Node(4);

        // 4

        expect(longestStreak(a)).toBe(1); //
    });
    test("longest streak 6", () => {
        expect(longestStreak(null)).toBe(0); //
    });

    test("longest streak 1 recurse", () => {
        const a = new Node(5);
        const b = new Node(5);
        const c = new Node(7);
        const d = new Node(7);
        const e = new Node(7);
        const f = new Node(6);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        // 5 -> 5 -> 7 -> 7 -> 7 -> 6

        expect(longestStreakRecurse(a)).toBe(3); //
    });
    test("longest streak 2 recurse", () => {
        const a = new Node(3);
        const b = new Node(3);
        const c = new Node(3);
        const d = new Node(3);
        const e = new Node(9);
        const f = new Node(9);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        // 3 -> 3 -> 3 -> 3 -> 9 -> 9

        expect(longestStreakRecurse(a)).toBe(4); //
    });
    test("longest streak 3 recurse", () => {
        const a = new Node(9);
        const b = new Node(9);
        const c = new Node(1);
        const d = new Node(9);
        const e = new Node(9);
        const f = new Node(9);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        // 9 -> 9 -> 1 -> 9 -> 9 -> 9

        expect(longestStreakRecurse(a)).toBe(3); //
    });
    test("longest streak 4 recurse", () => {
        const a = new Node(5);
        const b = new Node(5);

        a.next = b;

        // 5 -> 5

        expect(longestStreakRecurse(a)).toBe(2); //
    });

    test("longest streak 5 recurse", () => {
        const a = new Node(4);

        // 4

        expect(longestStreakRecurse(a)).toBe(1); //
    });
    test("longest streak 6 recurse", () => {
        expect(longestStreakRecurse(null)).toBe(0); //
    });
});
