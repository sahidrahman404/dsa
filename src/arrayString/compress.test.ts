import { expect, test } from "vitest";
import compress from "./compress";

test("compress", () => {
    expect(compress("ccaaatsss")).toBe("2c3at3s"); // ->
    expect(compress("ssssbbz")).toBe("4s2bz"); // ->
    expect(compress("ppoppppp")).toBe("2po5p"); // ->
    expect(compress("ppopppppa")).toBe("2po5pa"); // ->
    expect(compress("nnneeeeeeeeeeeezz")).toBe("3n12e2z"); // ->
    expect(
        compress(
            "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ),
    ).toBe("127y");
});
