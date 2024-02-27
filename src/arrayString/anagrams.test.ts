import { expect, test } from "vitest";
import anagrams from "./anagrams";

test("anagrams", () => {
    expect(anagrams("restful", "fluster")).toBe(true); // ->
    expect(anagrams("cats", "tocs")).toBe(false); // ->
    expect(anagrams("monkeyswrite", "newyorktimes")).toBe(true); // ->
    expect(anagrams("paper", "reapa")).toBe(false); // ->
    expect(anagrams("elbow", "below")).toBe(true); // ->
    expect(anagrams("tax", "taxi")).toBe(false); // ->
    expect(anagrams("taxi", "tax")).toBe(false); // ->
    expect(anagrams("night", "thing")).toBe(true); // ->
    expect(anagrams("abbc", "aabc")).toBe(false); // ->
    expect(anagrams("po", "popp")).toBe(false); // ->
    expect(anagrams("pp", "oo")).toBe(false); // ->
});
