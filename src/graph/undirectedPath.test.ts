import { describe, expect, test } from "vitest";
import { undirectedPath, undirectedPathRecurse } from "./undirectedPath";

describe("undirected path", () => {
    test("undirected path 1", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPath(edges, "j", "m")).toBe(true); // ->
    });
    test("undirected path 2", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPath(edges, "m", "j")).toBe(true); // ->
    });
    test("undirected path 3", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPath(edges, "l", "j")).toBe(true); // ->
    });
    test("undirected path 4", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPath(edges, "k", "o")).toBe(false); // ->
    });
    test("undirected path 5", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPath(edges, "i", "o")).toBe(false); // ->
    });
    test("undirected path 6", () => {
        const edges = [
            ["b", "a"],
            ["c", "a"],
            ["b", "c"],
            ["q", "r"],
            ["q", "s"],
            ["q", "u"],
            ["q", "t"],
        ];

        expect(undirectedPath(edges, "a", "b")).toBe(true); // ->
    });
    test("undirected path 7", () => {
        const edges = [
            ["b", "a"],
            ["c", "a"],
            ["b", "c"],
            ["q", "r"],
            ["q", "s"],
            ["q", "u"],
            ["q", "t"],
        ];

        expect(undirectedPath(edges, "a", "c")).toBe(true); // ->
    });
    test("undirected path 8", () => {
        const edges = [
            ["b", "a"],
            ["c", "a"],
            ["b", "c"],
            ["q", "r"],
            ["q", "s"],
            ["q", "u"],
            ["q", "t"],
        ];

        expect(undirectedPath(edges, "r", "t")).toBe(true); // ->
    });
    test("undirected path 9", () => {
        const edges = [
            ["b", "a"],
            ["c", "a"],
            ["b", "c"],
            ["q", "r"],
            ["q", "s"],
            ["q", "u"],
            ["q", "t"],
        ];

        expect(undirectedPath(edges, "r", "b")).toBe(false); // ->
    });
    test("undirected path 10", () => {
        const edges = [
            ["s", "r"],
            ["t", "q"],
            ["q", "r"],
        ];

        expect(undirectedPath(edges, "r", "t")).toBe(true); // ->
    });

    test("undirected path 1 recurse", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPathRecurse(edges, "j", "m")).toBe(true); // ->
    });
    test("undirected path 2 recurse", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPathRecurse(edges, "m", "j")).toBe(true); // ->
    });
    test("undirected path 3 recurse", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPathRecurse(edges, "l", "j")).toBe(true); // ->
    });
    test("undirected path 4 recurse", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPathRecurse(edges, "k", "o")).toBe(false); // ->
    });
    test("undirected path 5 recurse", () => {
        const edges = [
            ["i", "j"],
            ["k", "i"],
            ["m", "k"],
            ["k", "l"],
            ["o", "n"],
        ];

        expect(undirectedPathRecurse(edges, "i", "o")).toBe(false); // ->
    });
    test("undirected path 6 recurse", () => {
        const edges = [
            ["b", "a"],
            ["c", "a"],
            ["b", "c"],
            ["q", "r"],
            ["q", "s"],
            ["q", "u"],
            ["q", "t"],
        ];

        expect(undirectedPathRecurse(edges, "a", "b")).toBe(true); // ->
    });
    test("undirected path 7 Recurse", () => {
        const edges = [
            ["b", "a"],
            ["c", "a"],
            ["b", "c"],
            ["q", "r"],
            ["q", "s"],
            ["q", "u"],
            ["q", "t"],
        ];

        expect(undirectedPathRecurse(edges, "a", "c")).toBe(true); // ->
    });
    test("undirected path 8 recurse", () => {
        const edges = [
            ["b", "a"],
            ["c", "a"],
            ["b", "c"],
            ["q", "r"],
            ["q", "s"],
            ["q", "u"],
            ["q", "t"],
        ];

        expect(undirectedPathRecurse(edges, "r", "t")).toBe(true); // ->
    });
    test("undirected path 9 recurse", () => {
        const edges = [
            ["b", "a"],
            ["c", "a"],
            ["b", "c"],
            ["q", "r"],
            ["q", "s"],
            ["q", "u"],
            ["q", "t"],
        ];

        expect(undirectedPathRecurse(edges, "r", "b")).toBe(false); // ->
    });
    test("undirected path 10 recurse", () => {
        const edges = [
            ["s", "r"],
            ["t", "q"],
            ["q", "r"],
        ];

        expect(undirectedPathRecurse(edges, "r", "t")).toBe(true); // ->
    });
});
