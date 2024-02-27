import { expect, test } from "vitest";
import { Node } from "./linkedlist";
import { linkedlistValues, linkedlistValuesRecurse } from "./linkedlistValues";

test("linked list values", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d

    expect(linkedlistValues(a)).toStrictEqual(["a", "b", "c", "d"]); // ->
    expect(linkedlistValuesRecurse(a, [])).toStrictEqual(["a", "b", "c", "d"]); // ->

    const x = new Node("x");
    const y = new Node("y");

    x.next = y;

    // x -> y

    expect(linkedlistValues(x)).toStrictEqual(["x", "y"]);
    expect(linkedlistValuesRecurse(x, [])).toStrictEqual(["x", "y"]);
    const q = new Node("q");

    // q
    expect(linkedlistValues(q)).toStrictEqual(["q"]); // ->
    expect(linkedlistValuesRecurse(q, [])).toStrictEqual(["q"]); // ->

    expect(linkedlistValues(null)).toStrictEqual([]); // -> [ ]
    expect(linkedlistValuesRecurse(null, [])).toStrictEqual([]); // -> [ ]
});
