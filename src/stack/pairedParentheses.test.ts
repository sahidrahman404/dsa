import { describe, expect, test } from "vitest";
import { pairedParentheses } from "./pairedParentheses";

describe("paired parenteses", () => {
    test("paired parenteses 1", () => {
        expect(pairedParentheses("(david)((abby))")).toBe(true); // ->
    });
    test("paired parenteses 2", () => {
        expect(pairedParentheses("()rose(jeff")).toBe(false); // ->
    });
    test("paired parenteses 3", () => {
        expect(pairedParentheses(")(")).toBe(false); // ->
    });
    test("paired parenteses 4", () => {
        expect(pairedParentheses("()")).toBe(true); // ->
    });
    test("paired parenteses 5", () => {
        expect(pairedParentheses("(((potato())))")).toBe(true); // ->
    });
});
