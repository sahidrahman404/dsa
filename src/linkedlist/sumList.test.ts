import { expect, test } from "vitest";
import { Node } from "./linkedlist";
import { sumList, sumListRecurse } from "./sumList";

test("sum list", () => {
    const a = new Node(2);
    const b = new Node(8);
    const c = new Node(3);
    const d = new Node(-1);
    const e = new Node(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    // 2 -> 8 -> 3 -> -1 -> 7

    expect(sumList(a)).toBe(19); //
    expect(sumListRecurse(a)).toBe(19); //
    const x = new Node(38);
    const y = new Node(4);

    x.next = y;

    // 38 -> 4

    expect(sumList(x)).toBe(42); //
    expect(sumListRecurse(x)).toBe(42); //
    const z = new Node(100);

    // 100

    expect(sumList(z)).toBe(100); //
    expect(sumListRecurse(z)).toBe(100); //

    expect(sumList(null)).toBe(0); //
    expect(sumListRecurse(null)).toBe(0); //
});
