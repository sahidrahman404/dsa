import { describe, expect, test } from "vitest";
import { Node } from "./linkedlist";
import { getNodeValue, getNodeValueRecurse } from "./getNodeValue";

describe("get node value", () => {
    test("get node value 1", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        expect(getNodeValue(a, 2)).toBe("c"); //
        expect(getNodeValueRecurse(a, 2)).toBe("c"); //
    });

    test("get node value 2", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        expect(getNodeValue(a, 3)).toBe("d"); //
        expect(getNodeValueRecurse(a, 3)).toBe("d"); //
    });

    test("get node value 3", () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d

        expect(getNodeValue(a, 7)).toBe(null);
        expect(getNodeValueRecurse(a, 7)).toBe(null);
    });

    test("get node value 4", () => {
        const node1 = new Node("banana");
        const node2 = new Node("mango");

        node1.next = node2;

        // banana -> mango

        expect(getNodeValue(node1, 0)).toBe("banana"); //
        expect(getNodeValueRecurse(node1, 0)).toBe("banana"); //
    });

    test("get node value 5", () => {
        const node1 = new Node("banana");
        const node2 = new Node("mango");

        node1.next = node2;

        // banana -> mango

        expect(getNodeValue(node1, 1)).toBe("mango"); //
        expect(getNodeValueRecurse(node1, 1)).toBe("mango"); //
    });
});
