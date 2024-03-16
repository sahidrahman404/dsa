import { describe, expect, test } from "vitest";
import { countPaths } from "./countPaths";

describe("count paths", () => {
    test("count paths 1", () => {
        const grid = [
            ["O", "O"],
            ["O", "O"],
        ];
        expect(countPaths(grid)).toBe(2); // ->
    });
    test("count paths 2", () => {
        const grid = [
            ["O", "O", "X"],
            ["O", "O", "O"],
            ["O", "O", "O"],
        ];
        expect(countPaths(grid)).toBe(5); // ->
    });
    test("count paths 3", () => {
        const grid = [
            ["O", "O", "O"],
            ["O", "O", "X"],
            ["O", "O", "O"],
        ];
        expect(countPaths(grid)).toBe(3); // ->
    });
    test("count paths 4", () => {
        const grid = [
            ["O", "O", "O"],
            ["O", "X", "X"],
            ["O", "O", "O"],
        ];
        expect(countPaths(grid)).toBe(1); // ->
    });
    test("count paths 5", () => {
        const grid = [
            ["O", "O", "X", "O", "O", "O"],
            ["O", "O", "X", "O", "O", "O"],
            ["X", "O", "X", "O", "O", "O"],
            ["X", "X", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O"],
        ];
        expect(countPaths(grid)).toBe(0); // ->
    });
    test("count paths 6", () => {
        const grid = [
            ["O", "O", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "X"],
            ["X", "O", "O", "O", "O", "O"],
            ["X", "X", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O"],
        ];
        expect(countPaths(grid)).toBe(42); // ->
    });
    test("count paths 7", () => {
        const grid = [
            ["O", "O", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "X"],
            ["X", "O", "O", "O", "O", "O"],
            ["X", "X", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "X"],
        ];
        expect(countPaths(grid)).toBe(0); // ->
    });

    test("count paths 8", () => {
        const grid = [
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
            [
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
                "O",
            ],
        ];
        expect(countPaths(grid)).toBe(40116600); // ->
    });
});