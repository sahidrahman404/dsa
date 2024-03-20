import { describe, expect, test } from "vitest";
import { nestingScore } from "./nestingScore";

describe("nesting score", () => {
    test("nesting score 1", () => {
        expect(nestingScore("[]")).toBe(1); // ->
    });
    test("nesting score 2", () => {
        expect(nestingScore("[][][]")).toBe(3); // ->
    });
    test("nesting score 3", () => {
        expect(nestingScore("[[]]")).toBe(2); // ->
    });
    test("nesting score 4", () => {
        expect(nestingScore("[[][]]")).toBe(4); // ->
    });
    test("nesting score 5", () => {
        expect(nestingScore("[][[]]")).toBe(3); // ->
    });
});
