import { describe, expect, test } from "vitest";
import { prereqsPossible } from "./prereqsPossible";

describe("prereqs possible", () => {
    test("prereqs possible 1", () => {
        const numCourses = 6;
        const prereqs = [
            [0, 1],
            [2, 3],
            [0, 2],
            [1, 3],
            [4, 5],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(true); // ->
    });
    test("prereqs possible 2", () => {
        const numCourses = 6;
        const prereqs = [
            [0, 1],
            [2, 3],
            [0, 2],
            [1, 3],
            [4, 5],
            [3, 0],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(false); // ->
    });
    test("prereqs possible 3", () => {
        const numCourses = 5;
        const prereqs = [
            [2, 4],
            [1, 0],
            [0, 2],
            [0, 4],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(true); // ->
    });
    test("prereqs possible 4", () => {
        const numCourses = 6;
        const prereqs = [
            [2, 4],
            [1, 0],
            [0, 2],
            [0, 4],
            [5, 3],
            [3, 5],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(false); // ->
    });

    test("prereqs possible 5", () => {
        const numCourses = 8;
        const prereqs = [
            [1, 0],
            [0, 6],
            [2, 0],
            [0, 5],
            [3, 7],
            [4, 3],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(true); // ->
    });
});
