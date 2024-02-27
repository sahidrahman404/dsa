import { expect, test } from "vitest";
import mostFrequentChar from "./mostFrequentChar";

test("most frequent characters", () => {
    expect(mostFrequentChar("bookeeper")).toBe("e"); // ->
    expect(mostFrequentChar("david")).toBe("d"); // ->
    expect(mostFrequentChar("abby")).toBe("b"); // ->
    expect(mostFrequentChar("mississippi")).toBe("i"); // ->
    expect(mostFrequentChar("potato")).toBe("o"); // ->
    expect(mostFrequentChar("eleventennine")).toBe("e"); // ->
    expect(mostFrequentChar("riverbed")).toBe("r"); // ->
});
