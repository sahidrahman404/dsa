import { describe, expect, test } from "vitest";
import { knightAttack } from "./knightAttack";

describe("knight attack", () => {
    test("knight attack 1", () => {
        expect(knightAttack(8, 1, 1, 2, 2)).toBe(2); // ->
    });
    test("knight attack 2", () => {
        expect(knightAttack(8, 1, 1, 2, 3)).toBe(1); // ->
    });
    test("knight attack 3", () => {
        expect(knightAttack(8, 0, 3, 4, 2)).toBe(3); // ->
    });
    test("knight attack 4", () => {
        expect(knightAttack(8, 0, 3, 5, 2)).toBe(4); // ->
    });
});
