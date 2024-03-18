import { describe, expect, test } from "vitest";
import { overlapSubsequence } from "./overlapSubsequence";

describe("overlapSubsequence", () => {
    test("overlap subsequence 1", () => {
        expect(overlapSubsequence("dogs", "daogt")).toBe(3); // ->
    });
    test("overlap subsequence 2", () => {
        expect(overlapSubsequence("xcyats", "criaotsi")).toBe(4); // ->
    });
    test("overlap subsequence 3", () => {
        expect(overlapSubsequence("xfeqortsver", "feeeuavoeqr")).toBe(5); // ->
    });
});
