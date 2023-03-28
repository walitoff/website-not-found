const mod = require('./../src/layouts/partials/scripts')

describe('Translations availability test', () => {
    const translations = [
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
    const languageCodes = global.getLanguageCodes(translations);
    document.body.innerHTML = global.generateLanguages(translations);

    const list = [
        {
            code: "en",
            "equal": "en",
            "strict": true,
        },
        {
            code: "en",
            "equal": "en",
            "strict": false,
        },
        {
            code: "ru-RU",
            "equal": "ru-RU",
            "strict": true,
        },
        {
            code: "ru-RU",
            "equal": "ru-RU",
            "strict": false,
        },
        {
            code: "en-UK",
            "equal": false,
            "strict": true,
        },
        {
            code: "en-UK",
            "equal": "en",
            "strict": false,
        },
        {
            code: "ru",
            "equal": false,
            "strict": true,
        },
        {
            code: "ru",
            "equal": "ru-RU",
            "strict": false,
        },
    ];
    for (const listElement of list) {
        test(`Browser language '${listElement.code}' ` + (listElement.equal ? `matches "${listElement.equal}"` : "not available") + ` in translations ` + JSON.stringify(languageCodes) + ` (` + (listElement.strict ? "" : "not ") + "strict)", () => {
            expect(mod.isTranslationAvailable(listElement.code, listElement.strict)).toEqual(listElement.equal);
        });
    }
});
