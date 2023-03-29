"use strict";
const mod = require('./../src/layouts/partials/scripts');

describe('Find best translation test', () => {
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
        },
        {
            code: "zh-CH",
            title: "Chinese",
        },
        {
            code: "zh-HK",
            title: "Chinese",
        },
    ];
    const codes = global.getLanguageCodes(translations);
    document.body.innerHTML = global.generateLanguages(translations);
    const defaultLanguage = translations[0].code;

    const list = [
        {
            languages: ["fr"],
            result: "fr",
        },
        {
            languages: ["fr-FR"],
            result: "fr",
        },
        {
            languages: ["fr-FR", "en"],
            result: "fr",
        },
        {
            languages: ["en-GB", "fr-FR", "en"],
            result: "en-GB",
        },
        {
            languages: ["ru"],
            result: "ru-RU",
        },
        {
            languages: ["gr"],
            result: defaultLanguage,
        },
        {
            languages: ["ru-KZ"],
            result: "ru-RU",
        },
        {
            languages: ["en-US", "en-GB", "en"],
            result: "en-US",
        },
        {
            languages: ["en", "en-US"],
            result: "en",
        },
        {
            languages: ["en-AU", "en-US"],
            result: "en-US",
        },
        {
            languages: ["en-AU", "en-US", "en"],
            result: "en-US",
        },
        {
            languages: ["en-AU", "fr", "ru"],
            result: "en-GB",
        },
        {
            languages: ["zh", "fr", "ru"],
            result: "zh-CH",
        },
        {
            languages: ["zh-HK", "zh-CH"],
            result: "zh-HK",
        },
        {
            languages: ["zh"],
            result: "zh-CH",
        },
        {
            languages: ["zh-AR"],
            result: "zh-CH",
        },
        {
            languages: ["zh-HK"],
            result: "zh-HK",
        },
    ];
    for (const listElement of list) {
        test(`Best user language in ` + JSON.stringify(listElement.languages) + ` for ` + JSON.stringify(codes) + ` is equal to "${listElement.result}"`, () => {
            expect(mod.getBestTranslation(listElement.languages)).toEqual(listElement.result);
        });
    }
});
