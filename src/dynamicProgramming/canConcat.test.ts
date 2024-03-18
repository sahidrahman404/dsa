import { describe, expect, test } from "vitest";
import { canConcat } from "./canConcat";

describe("can concat", () => {
    test("can concat 1", () => {
        expect(canConcat("oneisnone", ["one", "none", "is"])).toBe(true); // ->
    });
    test("can concat 2", () => {
        expect(canConcat("oneisnone", ["on", "e", "is"])).toBe(false); // ->
    });
    test("can concat 3", () => {
        expect(canConcat("oneisnone", ["on", "e", "is", "n"])).toBe(true); // ->
    });
    test("can concat 4", () => {
        expect(canConcat("foodisgood", ["is", "g", "ood", "f"])).toBe(true); // ->
    });
});
