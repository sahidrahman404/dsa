import { expect, test } from "vitest";
import uncompress from "./uncompress";

test("uncompress", () => {
    expect(uncompress("2c3a1t")).toBe("ccaaat"); // ->
    expect(uncompress("2c3a1t")).toBe("ccaaat"); // ->
    expect(uncompress("4s2b")).toBe("ssssbb"); // ->
    expect(uncompress("2p1o5p")).toBe("ppoppppp"); // ->
    expect(uncompress("3n12e2z")).toBe("nnneeeeeeeeeeeezz"); // ->
    expect(uncompress("127y")).toBe(
        "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
    ); // ->
});
