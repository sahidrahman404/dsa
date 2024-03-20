import { describe, expect, test } from "vitest";
import { permutations } from "./permutations";

describe("permutations", () => {
    test("permutations 1", () => {
        const res = permutations(["a", "b", "c"]); // ->
        expect(res).toStrictEqual([
            ["a", "b", "c"],
            ["b", "a", "c"],
            ["b", "c", "a"],
            ["a", "c", "b"],
            ["c", "a", "b"],
            ["c", "b", "a"],
        ]);
    });
    test("permutations 2", () => {
        const res = permutations(["red", "blue"]); // ->
        expect(res).toStrictEqual([
            ["red", "blue"],
            ["blue", "red"],
        ]);
    });
});
