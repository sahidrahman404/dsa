import { expect, test } from "vitest";
import fiveSort from "./fiveSort";

test("compress", () => {
    expect(fiveSort([12, 5, 1, 5, 12, 7])).toStrictEqual([12, 7, 1, 12, 5, 5]);
    expect(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])).toStrictEqual([
        2, 2, 10, 6, 1, 5, 5, 5, 5, 5,
    ]);
    expect(fiveSort([5, 5, 5, 1, 1, 1, 4])).toStrictEqual([
        4, 1, 1, 1, 5, 5, 5,
    ]);
    expect(fiveSort([5, 5, 6, 5, 5, 5, 5])).toStrictEqual([
        6, 5, 5, 5, 5, 5, 5,
    ]);
    expect(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])).toStrictEqual([
        4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5,
    ]);
});
