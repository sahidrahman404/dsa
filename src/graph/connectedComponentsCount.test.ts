import { describe, expect, test } from "vitest";
import { connectedComponentsCount } from "./connectedComponentsCount";

describe("connected components count", () => {
    test("connected components count 1", () => {
        expect(
            connectedComponentsCount({
                0: [8, 1, 5],
                1: [0],
                5: [0, 8],
                8: [0, 5],
                2: [3, 4],
                3: [2, 4],
                4: [3, 2],
            }),
        ).toBe(2); // ->
    });
    test("connected components count 2", () => {
        expect(
            connectedComponentsCount({
                1: [2],
                2: [1, 8],
                6: [7],
                9: [8],
                7: [6, 8],
                8: [9, 7, 2],
            }),
        ).toBe(1); // -> 1
    });
    test("connected components count 3", () => {
        expect(
            connectedComponentsCount({
                3: [],
                4: [6],
                6: [4, 5, 7, 8],
                8: [6],
                7: [6],
                5: [6],
                1: [2],
                2: [1],
            }),
        ).toBe(3); // -> 3
    });
    test("connected components count 4", () => {
        expect(connectedComponentsCount({})).toBe(0); // -> 0
    });
    test("connected components count 5", () => {
        expect(
            connectedComponentsCount({
                0: [4, 7],
                1: [],
                2: [],
                3: [6],
                4: [0],
                6: [3],
                7: [0],
                8: [],
            }),
        ).toBe(5); // -> 5
    });
});
