import { describe, expect, test } from "vitest";
import { shortestPath } from "./shortestPath";

describe("shortest path", () => {
    test("shortest path 1", () => {
        const edges = [
            ["w", "x"],
            ["x", "y"],
            ["z", "y"],
            ["z", "v"],
            ["w", "v"],
        ];

        expect(shortestPath(edges, "w", "z")).toBe(2); // ->
    });
    test("shortest path 2", () => {
        const edges = [
            ["w", "x"],
            ["x", "y"],
            ["z", "y"],
            ["z", "v"],
            ["w", "v"],
        ];

        expect(shortestPath(edges, "y", "x")).toBe(1); // ->
    });
    test("shortest path 3", () => {
        const edges = [
            ["a", "c"],
            ["a", "b"],
            ["c", "b"],
            ["c", "d"],
            ["b", "d"],
            ["e", "d"],
            ["g", "f"],
        ];

        expect(shortestPath(edges, "a", "e")).toBe(3); // ->
    });
    test("shortest path 4", () => {
        const edges = [
            ["a", "c"],
            ["a", "b"],
            ["c", "b"],
            ["c", "d"],
            ["b", "d"],
            ["e", "d"],
            ["g", "f"],
        ];

        expect(shortestPath(edges, "e", "c")).toBe(2); // ->
    });
    test("shortest path 5", () => {
        const edges = [
            ["a", "c"],
            ["a", "b"],
            ["c", "b"],
            ["c", "d"],
            ["b", "d"],
            ["e", "d"],
            ["g", "f"],
        ];

        expect(shortestPath(edges, "b", "g")).toBe(-1); // -> -
    });
    test("shortest path 6", () => {
        const edges = [
            ["c", "n"],
            ["c", "e"],
            ["c", "s"],
            ["c", "w"],
            ["w", "e"],
        ];

        expect(shortestPath(edges, "w", "e")).toBe(1); // ->
    });
    test("shortest path 7", () => {
        const edges = [
            ["c", "n"],
            ["c", "e"],
            ["c", "s"],
            ["c", "w"],
            ["w", "e"],
        ];

        expect(shortestPath(edges, "n", "e")).toBe(2); // ->
    });
    test("shortest path 8", () => {
        const edges = [
            ["m", "n"],
            ["n", "o"],
            ["o", "p"],
            ["p", "q"],
            ["t", "o"],
            ["r", "q"],
            ["r", "s"],
        ];

        expect(shortestPath(edges, "m", "s")).toBe(6); // ->
    });
});
