const mod = require('./../src/layouts/partials/scripts')

describe('Get supported translations test', () => {
    function testIfSupported(translations) {
        const result = global.getLanguageCodes(translations);
        test("Languages in HTML must equal to " + JSON.stringify(result), () => {
            document.body.innerHTML = global.generateLanguages(translations);
            expect(mod.getSupportedTranslations()).toEqual(result);
        });
    }

    testIfSupported([
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
    ]);
    testIfSupported([
        {
            code: "fr-FR",
            title: "Français",
        },
        {
            code: "en",
            title: "English",
        },
        {
            code: "ru-RU",
            title: "Русский",
        }
    ]);
});
