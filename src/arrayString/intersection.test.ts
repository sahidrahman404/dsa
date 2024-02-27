import { expect, test } from "vitest";
import intersection from "./intersection";

test("intersection", () => {
    expect(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]).sort()).toStrictEqual(
        [2, 6].sort(),
    ); // ->
    expect(intersection([2, 4, 6], [4, 2]).sort()).toStrictEqual([2, 4].sort()); // ->
    expect(intersection([4, 2, 1], [1, 2, 4, 6]).sort()).toStrictEqual(
        [1, 2, 4].sort(),
    ); // ->
    expect(intersection([0, 1, 2], [10, 11].sort())).toStrictEqual([].sort()); // ->
});
