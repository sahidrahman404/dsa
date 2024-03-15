import { describe, expect, test } from "vitest";
import { closestCarrot } from "./closestCarrot";

describe("closest carrot", () => {
    test("closest carrot 1", () => {
        const grid = [
            ["O", "O", "O", "O", "O"],
            ["O", "X", "O", "O", "O"],
            ["O", "X", "X", "O", "O"],
            ["O", "X", "C", "O", "O"],
            ["O", "X", "X", "O", "O"],
            ["C", "O", "O", "O", "O"],
        ];

        expect(closestCarrot(grid, 1, 2)).toBe(4); // ->
    });
    test("closest carrot 2", () => {
        const grid = [
            ["O", "O", "O", "O", "O"],
            ["O", "X", "O", "O", "O"],
            ["O", "X", "X", "O", "O"],
            ["O", "X", "C", "O", "O"],
            ["O", "X", "X", "O", "O"],
            ["C", "O", "O", "O", "O"],
        ];

        expect(closestCarrot(grid, 0, 0)).toBe(5); // ->
    });
    test("closest carrot 3", () => {
        const grid = [
            ["O", "O", "X", "X", "X"],
            ["O", "X", "X", "X", "C"],
            ["O", "X", "O", "X", "X"],
            ["O", "O", "O", "O", "O"],
            ["O", "X", "X", "X", "X"],
            ["O", "O", "O", "O", "O"],
            ["O", "O", "C", "O", "O"],
            ["O", "O", "O", "O", "O"],
        ];

        expect(closestCarrot(grid, 3, 4)).toBe(9); // ->
    });
    test("closest carrot 4", () => {
        const grid = [
            ["O", "O", "X", "O", "O"],
            ["O", "X", "X", "X", "O"],
            ["O", "X", "C", "C", "O"],
        ];

        expect(closestCarrot(grid, 1, 4)).toBe(2); // ->
    });
    test("closest carrot 5", () => {
        const grid = [
            ["O", "O", "X", "O", "O"],
            ["O", "X", "X", "X", "O"],
            ["O", "X", "C", "C", "O"],
        ];

        expect(closestCarrot(grid, 2, 0)).toBe(-1); // -> -
    });
    test("closest carrot 6", () => {
        const grid = [
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "X", "X"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "X", "C"],
        ];

        expect(closestCarrot(grid, 0, 0)).toBe(-1); // -> -
    });
    test("closest carrot", () => {
        const grid = [
            ["O", "O", "X", "C", "O"],
            ["O", "X", "X", "X", "O"],
            ["C", "X", "O", "O", "O"],
        ];

        expect(closestCarrot(grid, 2, 2)).toBe(5); // ->
    });
});
