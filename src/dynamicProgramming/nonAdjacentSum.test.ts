import { describe, expect, test } from "vitest";
import { nonAdjacentSum } from "./nonAdjacentSum";

describe("non adjacent sum", () => {
    test("non adjacent sum 1", () => {
        const nums = [2, 4, 5, 12, 7];
        expect(nonAdjacentSum(nums)).toBe(16); // ->
    });
    test("non adjacent sum 2", () => {
        const nums = [7, 5, 5, 12];
        expect(nonAdjacentSum(nums)).toBe(19); // ->
    });
    test("non adjacent sum 3", () => {
        const nums = [7, 5, 5, 12, 17, 29];
        expect(nonAdjacentSum(nums)).toBe(48); // ->
    });
});
