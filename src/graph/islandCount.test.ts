import { describe, expect, test } from "vitest";
import { islandCount } from "./islandCount";

describe("island count", () => {
    test("island count 1", () => {
        const grid = [
            ["W", "L", "W", "W", "W"],
            ["W", "L", "W", "W", "W"],
            ["W", "W", "W", "L", "W"],
            ["W", "W", "L", "L", "W"],
            ["L", "W", "W", "L", "L"],
            ["L", "L", "W", "W", "W"],
        ];

        expect(islandCount(grid)).toBe(3); // -> 3
    });
    test("island count 2", () => {
        const grid = [
            ["L", "W", "W", "L", "W"],
            ["L", "W", "W", "L", "L"],
            ["W", "L", "W", "L", "W"],
            ["W", "W", "W", "W", "W"],
            ["W", "W", "L", "L", "L"],
        ];

        expect(islandCount(grid)).toBe(4); // -> 4
    });
});
