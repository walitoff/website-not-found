"use strict";

const mod = require('./../src/layouts/partials/scripts');

describe('Compare locales test', () => {
    const list = [
        {
            a: "en",
            b: "en",
            strict: true,
            result: true
        },
        {
            a: "en",
            b: "en",
            strict: false,
            result: true
        },
        {
            a: "en",
            b: "eN",
            strict: true,
            result: true
        },
        {
            a: "en",
            b: "eN",
            strict: false,
            result: true
        },
        {
            a: "en",
            b: "fr",
            strict: true,
            result: false
        },
        {
            a: "en",
            b: "fr",
            strict: false,
            result: false
        },
        {
            a: "en-UK",
            b: "en-UK",
            strict: true,
            result: true
        },
        {
            a: "en-UK",
            b: "en-UK",
            strict: false,
            result: true
        },
        {
            a: "en-UK",
            b: "en-US",
            strict: true,
            result: false
        },
        {
            a: "en-UK",
            b: "en-US",
            strict: false,
            result: true
        },
        {
            a: "en",
            b: "en-UK",
            strict: true,
            result: false
        },
        {
            a: "en",
            b: "en-UK",
            strict: false,
            result: true
        },
        {
            a: "fr-UK",
            b: "en-UK",
            strict: false,
            result: false
        },
        {
            a: "fr-UK",
            b: "en-UK",
            strict: true,
            result: false
        },
    ];
    for (const listElement of list) {
        test(`"${listElement.a}" is ` + (listElement.result ? '' : "not ") +
            `equal to "${listElement.b}" (` + (listElement.strict ? "" : "not ") + "strict)", () => {
            expect(mod.compareLocaleCodes(listElement.a, listElement.b, listElement.strict)).toBe(listElement.result);
        });
    }
});
