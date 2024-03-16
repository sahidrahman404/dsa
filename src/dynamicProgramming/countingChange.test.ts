import { describe, expect, test } from "vitest";
import { countingChange } from "./countingChange";

describe("counting change", () => {
    test("counting change 1", () => {
        expect(countingChange(4, [1, 2, 3])).toBe(4); // ->
    });
    test("counting change 2", () => {
        expect(countingChange(8, [1, 2, 3])).toBe(10); // ->
    });
    test("counting change 3", () => {
        expect(countingChange(24, [5, 7, 3])).toBe(5); // ->
    });
});
