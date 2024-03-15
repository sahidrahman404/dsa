import { describe, expect, test } from "vitest";
import { semestersRequired } from "./semestersRequired";

describe("semesters required", () => {
    test("semesters required", () => {
        const numCourses = 6;
        const prereqs = [
            [1, 2],
            [2, 4],
            [3, 5],
            [0, 5],
        ];
        expect(semestersRequired(numCourses, prereqs)).toBe(3); // ->
    });
    test("semesters required", () => {
        const numCourses = 7;
        const prereqs = [
            [4, 3],
            [3, 2],
            [2, 1],
            [1, 0],
            [5, 2],
            [5, 6],
        ];
        expect(semestersRequired(numCourses, prereqs)).toBe(5); // ->
    });
    test("semesters required", () => {
        const numCourses = 5;
        const prereqs = [
            [1, 0],
            [3, 4],
            [1, 2],
            [3, 2],
        ];
        expect(semestersRequired(numCourses, prereqs)).toBe(2); // ->
    });
    test("semesters required", () => {
        const numCourses = 12;
        const prereqs: number[][] = [];
        expect(semestersRequired(numCourses, prereqs)).toBe(1); // ->
    });
});
