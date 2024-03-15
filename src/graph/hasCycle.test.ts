import { describe, expect, test } from "vitest";
import { hasCycle } from "./hasCycle";

describe("has cycle", () => {
    test("has cycle 1", () => {
        const res = hasCycle({
            a: ["b"],
            b: ["c"],
            c: ["a"],
        }); // -> true
        expect(res).toBe(true);
    });
    test("has cycle 2", () => {
        const res = hasCycle({
            a: ["b", "c"],
            b: ["c"],
            c: ["d"],
            d: [],
        }); // -> false
        expect(res).toBe(false);
    });
    test("has cycle 3", () => {
        const res = hasCycle({
            a: ["b", "c"],
            b: [],
            c: [],
            e: ["f"],
            f: ["e"],
        }); // -> true
        expect(res).toBe(true);
    });
    test("has cycle 4", () => {
        const res = hasCycle({
            q: ["r", "s"],
            r: ["t", "u"],
            s: [],
            t: [],
            u: [],
            v: ["w"],
            w: [],
            x: ["w"],
        }); // -> false
        expect(res).toBe(false);
    });
});
