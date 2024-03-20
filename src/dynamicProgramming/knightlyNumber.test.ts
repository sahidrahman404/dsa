import { describe, expect, test } from "vitest";
import { knightlyNumber } from "./knightlyNumber";

describe("knightly number", () => {
    test("knightly number 1", () => {
        expect(knightlyNumber(8, 2, 4, 4, 5, 5)).toBe(2); // ->
    });
    test("knightly number 2", () => {
        expect(knightlyNumber(8, 2, 7, 1, 7, 1)).toBe(3); // ->
    });
    test("knightly number 3", () => {
        expect(knightlyNumber(8, 2, 5, 4, 5, 4)).toBe(8); // ->
    });
});
