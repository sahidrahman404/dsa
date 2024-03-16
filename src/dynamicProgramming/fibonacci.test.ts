import { describe, expect, test } from "vitest";
import { fib } from "./fibonacci";

describe("fibonnaci", () => {
    test("fibonnaci 1", () => {
        expect(fib(0)).toBe(0); // ->
    });
    test("fibonnaci 2", () => {
        expect(fib(1)).toBe(1); // ->
    });
    test("fibonnaci 3", () => {
        expect(fib(2)).toBe(1); // ->
    });
    test("fibonnaci 4", () => {
        expect(fib(3)).toBe(2); // ->
    });
});
