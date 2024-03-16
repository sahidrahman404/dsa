import { describe, expect, test } from "vitest";
import { arrayStepper } from "./arrayStepper";

describe("array stepper", () => {
    test("array stepper 1", () => {
        expect(arrayStepper([2, 4, 2, 0, 0, 1])).toBe(true); // ->
    });
    test("array stepper 2", () => {
        expect(arrayStepper([2, 3, 2, 0, 0, 1])).toBe(false); // ->
    });
    test("array stepper 3", () => {
        expect(arrayStepper([3, 1, 3, 1, 0, 1])).toBe(true); // ->
    });

    test("array stepper 4", () => {
        expect(arrayStepper([4, 1, 5, 1, 1, 1, 0, 4])).toBe(true); // ->
    });
    test("array stepper 5", () => {
        expect(arrayStepper([4, 1, 2, 1, 1, 1, 0, 4])).toBe(false); // ->
    });
    test("array stepper 6", () => {
        expect(arrayStepper([1, 1, 1, 1, 1, 0])).toBe(true); // ->
    });
});
