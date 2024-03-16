import { describe, expect, test } from "vitest";
import { summingSquares } from "./summingSquares";

describe("summing squares", () => {
    test("summing squares 1", () => {
        expect(summingSquares(8)).toBe(2); // ->
    });
    test("summing squares 2", () => {
        expect(summingSquares(9)).toBe(1); // ->
    });
    test("summing squares 3", () => {
        expect(summingSquares(12)).toBe(3); // ->
    });
    test("summing squares 4", () => {
        expect(summingSquares(1)).toBe(1); // ->
    });
});
