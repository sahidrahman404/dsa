import { describe, expect, test } from "vitest";
import { hasPath } from "./hasPath";

describe("has path", () => {
    test("has path 1", () => {
        const graph = {
            f: ["g", "i"],
            g: ["h"],
            h: [],
            i: ["g", "k"],
            j: ["i"],
            k: [],
        };

        expect(hasPath(graph, "f", "k")).toBe(true); //
    });
    test("has path 2", () => {
        const graph = {
            f: ["g", "i"],
            g: ["h"],
            h: [],
            i: ["g", "k"],
            j: ["i"],
            k: [],
        };

        expect(hasPath(graph, "f", "j")).toBe(false); //
    });
    test("has path 3", () => {
        const graph = {
            f: ["g", "i"],
            g: ["h"],
            h: [],
            i: ["g", "k"],
            j: ["i"],
            k: [],
        };

        expect(hasPath(graph, "i", "h")).toBe(true); //
    });
    test("has path 4", () => {
        const graph = {
            v: ["x", "w"],
            w: [],
            x: [],
            y: ["z"],
            z: [],
        };

        expect(hasPath(graph, "v", "w")).toBe(true); //
    });

    test("has path 4", () => {
        const graph = {
            v: ["x", "w"],
            w: [],
            x: [],
            y: ["z"],
            z: [],
        };

        expect(hasPath(graph, "v", "z")).toBe(false); //
    });
});
