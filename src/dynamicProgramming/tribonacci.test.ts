import { describe, expect, test } from "vitest";
import { trib } from "./tribonacci";

describe("tribonacci", () => {
    test("tribonacci 1", () => {
        expect(trib(0)).toBe(0); // ->
    });
    test("tribonacci 2", () => {
        expect(trib(1)).toBe(0); // ->
    });
    test("tribonacci 3", () => {
        expect(trib(2)).toBe(1); // ->
    });
    test("tribonacci 4", () => {
        expect(trib(5)).toBe(4); // ->
    });
});
