import { describe, expect, test } from "vitest";
import { largestComponent } from "./largestComponent";

describe("largest component", () => {
    test("largest component 1", () => {
        expect(
            largestComponent({
                0: ["8", "1", "5"],
                1: ["0"],
                5: ["0", "8"],
                8: ["0", "5"],
                2: ["3", "4"],
                3: ["2", "4"],
                4: ["3", "2"],
            }),
        ).toBe(4); // -> 4
    });
    test("largest component 2", () => {
        expect(
            largestComponent({
                1: ["2"],
                2: ["1", "8"],
                6: ["7"],
                9: ["8"],
                7: ["6", "8"],
                8: ["9", "7", "2"],
            }),
        ).toBe(6); // -> 6
    });
    test("largest component 3", () => {
        expect(
            largestComponent({
                3: [],
                4: ["6"],
                6: ["4", "5", "7", "8"],
                8: ["6"],
                7: ["6"],
                5: ["6"],
                1: ["2"],
                2: ["1"],
            }),
        ).toBe(5); // -> 5
    });
    test("largest component 4", () => {
        expect(largestComponent({})).toBe(0); // -> 0
    });
    test("largest component 5", () => {
        expect(
            largestComponent({
                0: ["4", "7"],
                1: [],
                2: [],
                3: ["6"],
                4: ["0"],
                6: ["3"],
                7: ["0"],
                8: [],
            }),
        ).toBe(3); // -> 3
    });
});
