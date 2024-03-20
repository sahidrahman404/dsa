import { describe, expect, test } from "vitest";
import { quickestConcat } from "./quickestConcat";

describe("quickest concat", () => {
    test("quickest concat 1", () => {
        const res = quickestConcat("caution", ["ca", "ion", "caut", "ut"]); // -> 2
        expect(res).toBe(2);
    });
    test("quickest concat 2", () => {
        const res = quickestConcat("caution", ["ion", "caut", "caution"]); // -> 1
        expect(res).toBe(1);
    });
    test("quickest concat 3", () => {
        const res = quickestConcat("respondorreact", [
            "re",
            "or",
            "spond",
            "act",
            "respond",
        ]); // -> 4

        expect(res).toBe(4);
    });
    test("quickest concat 4", () => {
        const res = quickestConcat("simchacindy", [
            "sim",
            "simcha",
            "acindy",
            "ch",
        ]); // -> 3
        expect(res).toBe(3);
    });
});
