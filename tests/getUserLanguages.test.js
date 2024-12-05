"use strict";
const mod = require('./../src/assets/custom');

describe('Get user languages test', () => {
    test("Testing mocking navigator.language equal to \"fr\"", () => {
        const value = "fr";
        global.navigatorLanguage.mockReturnValue(value);
        expect(window.navigator.language).toEqual(value);
    });

    test("Testing mocking navigator.languages", () => {
        const value = ["en", "fr", "ru-RU"];
        global.navigatorLanguages.mockReturnValue(value);
        expect(window.navigator.languages).toEqual(value);
    });

    test("Testing mocking navigator.languages empty", () => {
        const value = [];
        global.navigatorLanguages.mockReturnValue(value);
        expect(window.navigator.languages).toEqual(value);
    });

    test("Testing mocking navigator.language empty", () => {
        global.navigatorLanguage.mockReturnValue("");
        expect(window.navigator.language).toBe("");
    });

    const languagesCollection = [
        ["en", "fr", "ru-RU"],
        ["en"],
        [],
        ["fr", "en-GB"],
    ];
    for (const languagesCollectionElement of languagesCollection) {
        test("Testing navigator.languages in browser equal to " + JSON.stringify(languagesCollectionElement), () => {
            if (languagesCollectionElement.length > 0) {
                global.navigatorLanguage.mockReturnValue(languagesCollectionElement[0]);
            } else {
                global.navigatorLanguage.mockReturnValue("");
            }
            global.navigatorLanguages.mockReturnValue(languagesCollectionElement);
            expect(mod.getUserLanguages()).toEqual(languagesCollectionElement);
        });
    }

    const languagesList = [
        "en",
        "fr",
        "ru-RU",
        "",
    ];
    for (const languagesElement of languagesList) {
        const languages = (languagesElement.length > 0) ? [languagesElement] : [];
        test(`Testing navigator.language in browser equal to "${languagesElement}"`, () => {
            global.navigatorLanguage.mockReturnValue(languagesElement);
            global.navigatorLanguages.mockReturnValue([]);
            expect(mod.getUserLanguages()).toEqual(languages);
        });
    }
});
