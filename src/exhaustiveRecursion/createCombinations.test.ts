import { describe, expect, test } from "vitest";
import { createCombinations } from "./createCombinations";

describe("create combinations", () => {
    test("create combinations 1", () => {
        const res = createCombinations(["q", "r", "s", "t"], 2); // ->
        expect(res).toStrictEqual([
            ["q", "r"],
            ["q", "s"],
            ["q", "t"],
            ["r", "s"],
            ["r", "t"],
            ["s", "t"],
        ]);
    });
    test("create combinations 2", () => {
        const res = createCombinations(["a", "b", "c"], 2); // ->
        expect(res).toStrictEqual([
            ["a", "b"],
            ["a", "c"],
            ["b", "c"],
        ]);
    });
});
