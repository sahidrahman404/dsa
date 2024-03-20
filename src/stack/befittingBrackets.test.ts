import { describe, expect, test } from "vitest";
import { befittingBrackets } from "./befittingBrackets";

describe("befitting brackets", () => {
    test("befitting brackets 1", () => {
        expect(befittingBrackets("(){}[](())")).toBe(true); // ->
    });
    test("befitting brackets 2", () => {
        expect(befittingBrackets("({[]})")).toBe(true); // ->
    });
    test("befitting brackets 3", () => {
        expect(befittingBrackets("[][}")).toBe(false); // ->
    });
    test("befitting brackets 4", () => {
        expect(befittingBrackets("{[]}({}")).toBe(false); // ->
    });
    test("befitting brackets 5", () => {
        expect(befittingBrackets("[]{}(}[]")).toBe(false); // ->
    });
});
