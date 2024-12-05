"use strict";
const mod = require('./../src/assets/custom');

describe('Find matching translation test', () => {
    const translations = [
        {
            code: "en-GB",
            title: "English",
        },
        {
            code: "en-US",
            title: "English",
        },
        {
            code: "en",
            title: "English",
        },
        {
            code: "fr",
            title: "Français",
        },
        {
            code: "ru-RU",
            title: "Русский",
        }
    ];
    const codes = global.getLanguageCodes(translations);
    document.body.innerHTML = global.generateLanguages(translations);

    const list = [
        {
            languages: ["fr"],
            strict: true,
            result: "fr",
        },
        {
            languages: ["fr"],
            strict: false,
            result: "fr",
        },
        {
            languages: ["fr-FR", "en"],
            strict: true,
            result: "en",
        },
        {
            languages: ["fr-FR", "en"],
            strict: false,
            result: "fr",
        },
        {
            languages: ["ru"],
            strict: true,
            result: false,
        },
        {
            languages: ["ru"],
            strict: false,
            result: "ru-RU",
        },
        {
            languages: ["ru-KZ"],
            strict: false,
            result: "ru-RU",
        },
        {
            languages: ["ru-KZ"],
            strict: true,
            result: false,
        },
        {
            languages: ["ru-KZ", "fr", "en"],
            strict: true,
            result: "fr",
        },
        {
            languages: ["ru-KZ", "fr", "en"],
            strict: false,
            result: "ru-RU",
        },
    ];
    for (const listElement of list) {
        test(`Best preference user language in ` + JSON.stringify(listElement.languages) + ` for ` + JSON.stringify(codes) + ` is equal to "${listElement.result}" (` + (listElement.strict ? "" : "not ") + "strict)", () => {
            expect(mod.findBestMatchingTranslation(listElement.languages, listElement.strict)).toEqual(listElement.result);
        });
    }
});
