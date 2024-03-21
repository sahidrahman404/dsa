import { describe, expect, test } from "vitest";
import { topologicalOrder } from "./topologicalOrder";

describe("topological order", () => {
    test("topological order 1", () => {
        const res = topologicalOrder({
            a: ["f"],
            b: ["d"],
            c: ["a", "f"],
            d: ["e"],
            e: [],
            f: ["b", "e"],
        }); // ->
        expect(res).toStrictEqual(["c", "a", "f", "b", "d", "e"]);
    });
    test("topological order 2", () => {
        const res = topologicalOrder({
            h: ["l", "m"],
            i: ["k"],
            j: ["k", "i"],
            k: ["h", "m"],
            l: ["m"],
            m: [],
        }); // ->
        expect(res).toStrictEqual(["j", "i", "k", "h", "l", "m"]);
    });
});
