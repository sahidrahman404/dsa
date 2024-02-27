import { expect, test } from "vitest";
import maxValue from "./maxValue";

test("greet", () => {
    expect(maxValue([4, 7, 2, 8, 10, 9])).toBe(10);
    expect(maxValue([10, 5, 40, 40.3])).toBe(40.3);
    expect(maxValue([-5, -2, -1, -11])).toBe(-1);
    expect(maxValue([42])).toBe(42); // ->
    expect(maxValue([1000, 8])).toBe(1000);
    expect(maxValue([1000, 8, 9000])).toBe(9000);
    expect(maxValue([2, 5, 1, 1, 4])).toBe(5); // -> 5
});
