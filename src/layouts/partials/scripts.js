/**
 * Gets supported translations by analyzing HTML page
 * @returns {string[]}
 */
function getSupportedTranslations() {
    let languages = [];
    UIkit.util.each(UIkit.util.$$('li[lang]'), function (element) {
        languages.push(UIkit.util.attr(element, "lang"));
    });
    return [...new Set(languages)];
}

/**
 * Gets the default translation
 * @returns {string}
 */
function getDefaultTranslation() {
    const languages = getSupportedTranslations();
    return (languages.length > 0) ? languages[0] : "";
}

/**
 * Compares locale strings for example "en" or "en-US" and checks if they are equal or not.
 * @param localeName1 {string}
 * @param localeName2 {string}
 * @param strictCompare {boolean} if strict, then "en" and "en-US" are not equal
 * @returns {boolean} true if equal, false if not
 */
function compareLocaleCodes(localeName1, localeName2, strictCompare) {
    if ((typeof localeName1 != 'string') || (typeof localeName2 != 'string'))
        return false;
    if (typeof strictCompare != 'boolean')
        strictCompare = false;
    if (strictCompare)
        return localeName1.toUpperCase().trim() === localeName2.toUpperCase().trim();
    //Non-strict compare below. We must check the main part of the locale, e.g. for "en-US" it's "en".
    let main1 = localeName1.split('-', 1);
    let main2 = localeName2.split('-', 1);
    if (typeof main1[0] != 'string')
        main1 = localeName1;
    else
        main1 = main1[0];
    if (typeof main2[0] != 'string')
        main2 = localeName2;
    else
        main2 = main2[0];
    return compareLocaleCodes(main1, main2, true);
}

/**
 * Activates tab for the specified code
 * @param languageId {number}
 */
function setTranslation(languageId) {
    const switcher = UIkit.switcher(UIkit.util.$('#my-tabs'));
    switcher.show(languageId);
}

/**
 * Checks if translation available
 * @param language
 * @param isStrict
 * @returns {string|false}
 */
function isTranslationAvailable(language, isStrict) {
    const translations = getSupportedTranslations();
    for (const supportedLanguage of translations) {
        if (compareLocaleCodes(language, supportedLanguage, isStrict))
            return supportedLanguage;
    }
    return false;
}

/**
 * Returns the best translation for the user
 * @param userLanguages {string[]} list of user preferred languages from the browser
 * @param isStrict {boolean} true if "en" and "en-US" are not equal
 * @returns {string|false} the translation code or false if no match
 */
function findBestMatchingTranslation(userLanguages, isStrict) {
    for (const userLanguage of userLanguages) {
        const translation = isTranslationAvailable(userLanguage, isStrict);
        if (translation)
            return translation;
    }
    return false;
}

/**
 * Finds the best translation available. If nothing, then returns the default.
 * @param userLanguages {string[]} list of user preferred languages from the browser
 * @returns {string} the translation code
 */
function getBestTranslation(userLanguages) {
    const bestStrictTranslation = findBestMatchingTranslation(userLanguages, true);
    const bestNonStrictTranslation = findBestMatchingTranslation(userLanguages, false);
    if (!bestStrictTranslation && !bestNonStrictTranslation)
        //No matches, return the default translation
        return getDefaultTranslation();
    if (!bestStrictTranslation)
        //Return what we've got, no alternatives
        return bestNonStrictTranslation;

    /*
    Check for situation when user has preferred languages "fr", "en-UK" then we must return "fr".
    In case of "en","en-UK" we return "en-UK".
     */
    if (compareLocaleCodes(bestStrictTranslation, bestNonStrictTranslation, false))
        return bestStrictTranslation;
    return bestNonStrictTranslation;
}

/**
 * @returns {ReadonlyArray<string>|string[]}
 */
function getUserLanguages() {
    const languages = window.navigator.languages ?? [];
    // noinspection JSDeprecatedSymbols
    const language = window.navigator.language || window.navigator.userLanguage;
    if (languages.length > 0)
        return languages;
    if (language && language.length > 0)
        return [language];
    return [];
}

function start() {
    const languages = getUserLanguages();
    const bestTranslation = getBestTranslation(languages);
    const translations = getSupportedTranslations();
    const index = translations.indexOf(bestTranslation);
    setTranslation(index);
}

if (typeof UIkit !== "undefined" && UIkit._initialized)
    start();
else
    document.addEventListener('uikit:init', () => {
        //UIKit is ready, we can work
        start();
    });

if (typeof exports !== "undefined") {
    module.exports = {
        compareLocaleCodes,
        getSupportedTranslations,
        getDefaultTranslation,
        isTranslationAvailable,
        getUserLanguages,
        findBestMatchingTranslation,
        getBestTranslation,
    }
}
