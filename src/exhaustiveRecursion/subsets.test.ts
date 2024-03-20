import { describe, expect, test } from "vitest";
import { subsets } from "./subsets";

describe("subsets", () => {
    test("subsets 1", () => {
        const res = subsets(["a", "b"]); // ->
        expect(res).toStrictEqual([[], ["b"], ["a"], ["a", "b"]]);
    });
    test("subsets 2", () => {
        const res = subsets(["a", "b", "c"]); // ->

        expect(res).toStrictEqual([
            [],
            ["c"],
            ["b"],
            ["b", "c"],
            ["a"],
            ["a", "c"],
            ["a", "b"],
            ["a", "b", "c"],
        ]);
    });
    test("subsets 3", () => {
        const res = subsets(["x"]); // ->

        expect(res).toStrictEqual([[], ["x"]]);
    });
    test("subsets 4", () => {
        const res = subsets([]); // ->

        expect(res).toStrictEqual([[]]);
    });
});
