import { expect, describe, test } from "vitest";
import { Node } from "./linkedlist";
import { addLists, addListsRecurse } from "./addLists";

describe("add lists", () => {
    test("add lists 1", () => {
        //   621
        // + 354
        // -----
        //   975

        const a1 = new Node(1);
        const a2 = new Node(2);
        const a3 = new Node(6);
        a1.next = a2;
        a2.next = a3;
        // 1 -> 2 -> 6

        const b1 = new Node(4);
        const b2 = new Node(5);
        const b3 = new Node(3);
        b1.next = b2;
        b2.next = b3;
        // 4 -> 5 -> 3

        const c1 = new Node(5);
        const c2 = new Node(7);
        const c3 = new Node(9);
        c1.next = c2;
        c2.next = c3;
        // 5 -> 7 -> 9
        expect(addLists(a1, b1)).toStrictEqual(c1);
    });

    test("add lists 2", () => {
        //  7541
        // +  32
        // -----
        //  7573

        const a1 = new Node(1);
        const a2 = new Node(4);
        const a3 = new Node(5);
        const a4 = new Node(7);
        a1.next = a2;
        a2.next = a3;
        a3.next = a4;
        // 1 -> 4 -> 5 -> 7

        const b1 = new Node(2);
        const b2 = new Node(3);
        b1.next = b2;
        // 2 -> 3

        const c1 = new Node(3);
        const c2 = new Node(7);
        const c3 = new Node(5);
        const c4 = new Node(7);
        c1.next = c2;
        c2.next = c3;
        c3.next = c4;
        // 3 -> 7 -> 5 -> 7
        expect(addLists(a1, b1)).toStrictEqual(c1);
    });
    test("add lists 3", () => {
        //   39
        // + 47
        // ----
        //   86

        const a1 = new Node(9);
        const a2 = new Node(3);
        a1.next = a2;
        // 9 -> 3

        const b1 = new Node(7);
        const b2 = new Node(4);
        b1.next = b2;
        // 7 -> 4

        const c1 = new Node(6);
        const c2 = new Node(8);
        c1.next = c2;
        // 6 -> 8
        expect(addLists(a1, b1)).toStrictEqual(c1);
    });

    test("add lists 4", () => {
        //   89
        // + 47
        // ----
        //  136

        const a1 = new Node(9);
        const a2 = new Node(8);
        a1.next = a2;
        // 9 -> 8

        const b1 = new Node(7);
        const b2 = new Node(4);
        b1.next = b2;
        // 7 -> 4

        const c1 = new Node(6);
        const c2 = new Node(3);
        const c3 = new Node(1);
        c1.next = c2;
        c2.next = c3;

        // 6 -> 3 -> 1
        expect(addLists(a1, b1)).toStrictEqual(c1);
    });

    test("add lists 5", () => {
        //   4389
        // +   47
        // ----
        //   4436

        const a1 = new Node(9);
        const a2 = new Node(8);
        const a3 = new Node(3);
        const a4 = new Node(4);
        a1.next = a2;
        a2.next = a3;
        a3.next = a4;
        // 9 -> 8 -> 3 -> 4

        const b1 = new Node(7);
        const b2 = new Node(4);
        b1.next = b2;
        // 7 -> 4

        const c1 = new Node(6);
        const c2 = new Node(3);
        const c3 = new Node(4);
        const c4 = new Node(4);
        c1.next = c2;
        c2.next = c3;
        c3.next = c4;

        // 6 -> 3 -> 4 -> 4
        expect(addLists(a1, b1)).toStrictEqual(c1);
    });

    test("add lists 6", () => {
        //   62331
        // +   759
        // -----
        //   63090

        const a1 = new Node(1);
        const a2 = new Node(3);
        const a3 = new Node(3);
        const a4 = new Node(2);
        const a5 = new Node(6);
        a1.next = a2;
        a2.next = a3;
        a3.next = a4;
        a4.next = a5;
        // 1 -> 3 -> 3 -> 2 -> 6

        const b1 = new Node(9);
        const b2 = new Node(5);
        const b3 = new Node(7);
        b1.next = b2;
        b2.next = b3;
        // 9 -> 5 -> 7

        const c1 = new Node(0);
        const c2 = new Node(9);
        const c3 = new Node(0);
        const c4 = new Node(3);
        const c5 = new Node(6);
        c1.next = c2;
        c2.next = c3;
        c3.next = c4;
        c4.next = c5;
        // 0 -> 9 -> 0 -> 3 -> 6
        expect(addLists(a1, b1)).toStrictEqual(c1);
    });

    test("add lists 1 recurse", () => {
        //   621
        // + 354
        // -----
        //   975

        const a1 = new Node(1);
        const a2 = new Node(2);
        const a3 = new Node(6);
        a1.next = a2;
        a2.next = a3;
        // 1 -> 2 -> 6

        const b1 = new Node(4);
        const b2 = new Node(5);
        const b3 = new Node(3);
        b1.next = b2;
        b2.next = b3;
        // 4 -> 5 -> 3

        const c1 = new Node(5);
        const c2 = new Node(7);
        const c3 = new Node(9);
        c1.next = c2;
        c2.next = c3;
        // 5 -> 7 -> 9
        expect(addListsRecurse(a1, b1)).toStrictEqual(c1);
    });

    test("add lists 2 recurse", () => {
        //  7541
        // +  32
        // -----
        //  7573

        const a1 = new Node(1);
        const a2 = new Node(4);
        const a3 = new Node(5);
        const a4 = new Node(7);
        a1.next = a2;
        a2.next = a3;
        a3.next = a4;
        // 1 -> 4 -> 5 -> 7

        const b1 = new Node(2);
        const b2 = new Node(3);
        b1.next = b2;
        // 2 -> 3

        const c1 = new Node(3);
        const c2 = new Node(7);
        const c3 = new Node(5);
        const c4 = new Node(7);
        c1.next = c2;
        c2.next = c3;
        c3.next = c4;
        // 3 -> 7 -> 5 -> 7
        expect(addListsRecurse(a1, b1)).toStrictEqual(c1);
    });
    test("add lists 3 recurse", () => {
        //   39
        // + 47
        // ----
        //   86

        const a1 = new Node(9);
        const a2 = new Node(3);
        a1.next = a2;
        // 9 -> 3

        const b1 = new Node(7);
        const b2 = new Node(4);
        b1.next = b2;
        // 7 -> 4

        const c1 = new Node(6);
        const c2 = new Node(8);
        c1.next = c2;
        // 6 -> 8
        expect(addListsRecurse(a1, b1)).toStrictEqual(c1);
    });

    test("add lists 4 recurse", () => {
        //   89
        // + 47
        // ----
        //  136

        const a1 = new Node(9);
        const a2 = new Node(8);
        a1.next = a2;
        // 9 -> 8

        const b1 = new Node(7);
        const b2 = new Node(4);
        b1.next = b2;
        // 7 -> 4

        const c1 = new Node(6);
        const c2 = new Node(3);
        const c3 = new Node(1);
        c1.next = c2;
        c2.next = c3;

        // 6 -> 3 -> 1
        expect(addListsRecurse(a1, b1)).toStrictEqual(c1);
    });

    test("add lists 5 recurse", () => {
        //   4389
        // +   47
        // ----
        //   4436

        const a1 = new Node(9);
        const a2 = new Node(8);
        const a3 = new Node(3);
        const a4 = new Node(4);
        a1.next = a2;
        a2.next = a3;
        a3.next = a4;
        // 9 -> 8 -> 3 -> 4

        const b1 = new Node(7);
        const b2 = new Node(4);
        b1.next = b2;
        // 7 -> 4

        const c1 = new Node(6);
        const c2 = new Node(3);
        const c3 = new Node(4);
        const c4 = new Node(4);
        c1.next = c2;
        c2.next = c3;
        c3.next = c4;

        // 6 -> 3 -> 4 -> 4
        expect(addListsRecurse(a1, b1)).toStrictEqual(c1);
    });

    test("add lists 6 recurse", () => {
        //   62331
        // +   759
        // -----
        //   63090

        const a1 = new Node(1);
        const a2 = new Node(3);
        const a3 = new Node(3);
        const a4 = new Node(2);
        const a5 = new Node(6);
        a1.next = a2;
        a2.next = a3;
        a3.next = a4;
        a4.next = a5;
        // 1 -> 3 -> 3 -> 2 -> 6

        const b1 = new Node(9);
        const b2 = new Node(5);
        const b3 = new Node(7);
        b1.next = b2;
        b2.next = b3;
        // 9 -> 5 -> 7

        const c1 = new Node(0);
        const c2 = new Node(9);
        const c3 = new Node(0);
        const c4 = new Node(3);
        const c5 = new Node(6);
        c1.next = c2;
        c2.next = c3;
        c3.next = c4;
        c4.next = c5;
        // 0 -> 9 -> 0 -> 3 -> 6
        expect(addListsRecurse(a1, b1)).toStrictEqual(c1);
    });
});
