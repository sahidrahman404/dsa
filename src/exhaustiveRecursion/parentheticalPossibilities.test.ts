import { describe, expect, test } from "vitest";
import { parentheticalPossibilities } from "./parentheticalPossibilities";

describe("parenthetical possibilities", () => {
    test("parenthetical possibilities 1", () => {
        const res = parentheticalPossibilities("x(mn)yz");
        expect(res).toStrictEqual(["xmyz", "xnyz"]);
    });
    test("parenthetical possibilities 2", () => {
        const res = parentheticalPossibilities("(qr)ab(stu)c");
        expect(res).toStrictEqual([
            "qabsc",
            "qabtc",
            "qabuc",
            "rabsc",
            "rabtc",
            "rabuc",
        ]);
    });
    test("parenthetical possibilities 3", () => {
        const res = parentheticalPossibilities("taco");
        expect(res).toStrictEqual(["taco"]);
    });
});
