import { describe, expect, test } from "vitest";
import { maxPalinSubsequence } from "./maxPalinSubsequence";

describe("max palin subsequence", () => {
    test("max palin subsequence 1", () => {
        expect(maxPalinSubsequence("luwxult")).toBe(5); // ->
    });
    test("max palin subsequence 2", () => {
        expect(maxPalinSubsequence("xyzaxxzy")).toBe(6); // ->
    });
    test("max palin subsequence 3", () => {
        expect(maxPalinSubsequence("lol")).toBe(3); // ->
    });
    test("max palin subsequence 4", () => {
        expect(maxPalinSubsequence("boabcdefop")).toBe(3); // ->
    });
});
