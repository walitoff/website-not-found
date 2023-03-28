const mod = require('./../src/layouts/partials/scripts')

describe('Get default translation test', () => {
    test("Language in HTML must equal to 'en'", () => {
        document.body.innerHTML =
            '<div>' +
            '  <ul>' +
            '       <li class="uk-active" lang="en">English</li>' +
            '       <li lang="fr">Français</li>' +
            '       <li lang="ru-RU">Русский</li>' +
            '  </ul>' +
            '</div>';

        expect(mod.getDefaultTranslation()).toBe("en");
    });

    test("Language in HTML must equal to 'fr-FR'", () => {
        document.body.innerHTML =
            '<div>' +
            '  <ul>' +
            '       <li lang="fr-FR">Français</li>' +
            '       <li class="uk-active" lang="en">English</li>' +
            '       <li lang="ru-RU">Русский</li>' +
            '  </ul>' +
            '</div>';

        expect(mod.getDefaultTranslation()).toBe("fr-FR");
    });
});
