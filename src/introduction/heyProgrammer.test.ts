// sum.test.js
import { expect, test } from "vitest";
import heyProgrammer from "./heyProgrammer";

test("greet", () => {
    expect(heyProgrammer("alvin")).toBe("hey alvin");
    expect(heyProgrammer("jason")).toBe("hey jason");
    expect(heyProgrammer("how now brown cow")).toBe("hey how now brown cow");
});
