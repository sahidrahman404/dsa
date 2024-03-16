import { describe, expect, test } from "vitest";
import { sumPossible } from "./sumPossible";

describe("sumPossible", () => {
    test("sumPossible 1", () => {
        expect(sumPossible(8, [5, 12, 4])).toBe(true); // ->
    });
    test("sumPossible 2", () => {
        expect(sumPossible(15, [6, 2, 10, 19])).toBe(false); // ->
    });
    test("sumPossible 3", () => {
        expect(sumPossible(13, [6, 2, 1])).toBe(true); // ->
    });
    test("sumPossible 4", () => {
        expect(sumPossible(103, [6, 20, 1])).toBe(true); // ->
    });
    test("sumPossible 5", () => {
        expect(sumPossible(12, [])).toBe(false); // ->
    });
    test("sumPossible 6", () => {
        expect(sumPossible(12, [12])).toBe(true); // ->
    });
});
