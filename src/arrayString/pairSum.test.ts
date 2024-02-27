import { expect, test } from "vitest";
import pairSum from "./pairSum";

test("pair sum", () => {
    expect(pairSum([3, 2, 5, 4, 1], 8)).toStrictEqual([0, 2]); // ->
    expect(pairSum([4, 7, 9, 2, 5, 1], 5)).toStrictEqual([0, 5]); // ->
    expect(pairSum([4, 7, 9, 2, 5, 1], 3)).toStrictEqual([3, 5]); // ->
    expect(pairSum([1, 6, 7, 2], 13)).toStrictEqual([1, 2]); // ->
    expect(pairSum([9, 9], 18)).toStrictEqual([0, 1]); // ->
    expect(pairSum([6, 4, 2, 8], 12)).toStrictEqual([1, 3]); // ->
});
