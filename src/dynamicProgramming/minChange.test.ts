import { describe, expect, test } from "vitest";
import { minChange } from "./minChange";

describe("min change", () => {
    test("min change 1", () => {
        expect(minChange(8, [1, 5, 4, 12])).toBe(2);
    });
    test("min change 2", () => {
        expect(minChange(13, [1, 9, 5, 14, 30])).toBe(5);
    });
    test("min change 3", () => {
        expect(minChange(23, [2, 5, 7])).toBe(4);
    });
    test("min change 4", () => {
        expect(minChange(102, [1, 5, 10, 25])).toBe(6);
    });
    test("min change 5", () => {
        expect(minChange(200, [1, 5, 10, 25])).toBe(8);
    });
});
