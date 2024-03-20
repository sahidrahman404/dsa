import { describe, expect, test } from "vitest";
import { decompressBraces } from "./decompressBraces";

describe("decompress braces", () => {
    test("decompress braces 1", () => {
        expect(decompressBraces("2{q}3{tu}v")).toBe("qqtututuv");
        // ->
    });
    test("decompress braces 2", () => {
        expect(decompressBraces("ch3{ao}")).toBe("chaoaoao");
        // ->
    });
    test("decompress braces 3", () => {
        expect(decompressBraces("2{y3{o}}s")).toBe("yoooyooos");
        // -> yoooyooos
    });
    test("decompress braces 4", () => {
        expect(decompressBraces("z3{a2{xy}b}")).toBe("zaxyxybaxyxybaxyxyb");
        // ->
    });
    test("decompress braces 5", () => {
        expect(decompressBraces("2{3{r4{e}r}io}")).toBe(
            "reeeerreeeerreeeerioreeeerreeeerreeeerio",
        );
        // ->
    });
});
