import { expect, test } from "vitest";
import pairProduct from "./pairProduct";

test("pair products", () => {
    expect(pairProduct([3, 2, 5, 4, 1], 8)).toStrictEqual([1, 3]); // ->
    expect(pairProduct([3, 2, 5, 4, 1], 10)).toStrictEqual([1, 2]); // ->
    expect(pairProduct([4, 7, 9, 2, 5, 1], 5)).toStrictEqual([4, 5]); // ->
    expect(pairProduct([4, 7, 9, 2, 5, 1], 35)).toStrictEqual([1, 4]); // ->
    expect(pairProduct([3, 2, 5, 4, 1], 10)).toStrictEqual([1, 2]); // ->
    expect(pairProduct([4, 6, 8, 2], 16)).toStrictEqual([2, 3]); // ->
});
