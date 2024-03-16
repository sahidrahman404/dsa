import { describe, expect, test } from "vitest";
import { maxPathSum } from "./maxPathSum";

describe("maxPathSum", () => {
    test("maxPathSum 1", () => {
        const grid = [
            [1, 3, 12],
            [5, 1, 1],
            [3, 6, 1],
        ];
        expect(maxPathSum(grid)).toBe(18); // ->
    });
    test("maxPathSum 2", () => {
        const grid = [
            [1, 2, 8, 1],
            [3, 1, 12, 10],
            [4, 0, 6, 3],
        ];
        expect(maxPathSum(grid)).toBe(36); // ->
    });
    test("maxPathSum 3", () => {
        const grid = [
            [1, 2, 8, 1],
            [3, 10, 12, 10],
            [4, 0, 6, 3],
        ];
        expect(maxPathSum(grid)).toBe(39); // ->
    });
    // test("maxPathSum 4", () => {
    //     expect(maxPathSum(103, [6, 20, 1])).toBe(true); // ->
    // });
});
