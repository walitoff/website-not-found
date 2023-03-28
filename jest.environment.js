//Put all dependency libs here
window.UIkit = require('uikit');

global.navigatorLanguage = jest.spyOn(window.navigator, 'language', 'get');
global.navigatorLanguages = jest.spyOn(window.navigator, 'languages', 'get');

global.generateLanguages = function (list) {
    let htmlContents = '<div><ul>';
    for (const listElement of list) {
        htmlContents += `<li lang="${listElement.code}">${listElement.title}</li>`;
    }
    htmlContents += '</ul></div>';
    return htmlContents;
}

global.getLanguageCodes = function (list) {
    let results = [];
    for (const listElement of list) {
        results.push(listElement.code);
    }
    return results;
}

//document.dispatchEvent(new Event('uikit:init'));
