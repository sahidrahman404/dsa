import { describe, expect, test } from "vitest";
import { substituteSynonyms } from "./substitutingSynonyms";

describe("subtituting synonyms", () => {
    test("subtituting synonyms 1", () => {
        const sentence = "follow the yellow brick road";
        const synonyms = {
            follow: ["chase", "pursue"],
            yellow: ["gold", "amber", "lemon"],
        };

        expect(substituteSynonyms(sentence, synonyms)).toStrictEqual([
            "chase the gold brick road",
            "chase the amber brick road",
            "chase the lemon brick road",
            "pursue the gold brick road",
            "pursue the amber brick road",
            "pursue the lemon brick road",
        ]);
    });
    test("subtituting synonyms 2", () => {
        const sentence = "I think it's gonna be a long long time";
        const synonyms = {
            think: ["believe", "reckon"],
            long: ["lengthy", "prolonged"],
        };

        expect(substituteSynonyms(sentence, synonyms)).toStrictEqual([
            "I believe it's gonna be a lengthy lengthy time",
            "I believe it's gonna be a lengthy prolonged time",
            "I believe it's gonna be a prolonged lengthy time",
            "I believe it's gonna be a prolonged prolonged time",
            "I reckon it's gonna be a lengthy lengthy time",
            "I reckon it's gonna be a lengthy prolonged time",
            "I reckon it's gonna be a prolonged lengthy time",
            "I reckon it's gonna be a prolonged prolonged time",
        ]);
    });
});
