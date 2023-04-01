[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cca1e0cef28a470cbbc1d3c0c877ca89)](https://app.codacy.com/gh/walitoff/website-not-found?utm_source=github.com&utm_medium=referral&utm_content=walitoff/website-not-found&utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/823936c92937484e91f3576cb410fd1e)](https://app.codacy.com/gh/walitoff/website-not-found/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)
[![ESLint](https://github.com/walitoff/website-not-found/actions/workflows/eslint.yml/badge.svg)](https://github.com/walitoff/website-not-found/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/walitoff/website-not-found/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/walitoff/website-not-found/actions/workflows/github-code-scanning/codeql)
[![Codacy Security Scan](https://github.com/walitoff/website-not-found/actions/workflows/codacy.yml/badge.svg?branch=main)](https://github.com/walitoff/website-not-found/actions/workflows/codacy.yml)
[![Node.js CI](https://github.com/walitoff/website-not-found/actions/workflows/node.js.yml/badge.svg)](https://github.com/walitoff/website-not-found/actions/workflows/node.js.yml)
[![Deploy Hugo site to Pages](https://github.com/walitoff/website-not-found/actions/workflows/hugo.yml/badge.svg)](https://github.com/walitoff/website-not-found/actions/workflows/hugo.yml)
![GitHub](https://img.shields.io/github/license/walitoff/website-not-found?color=blue)

# 404 Page for Missing Website (Domain)

If you offer hosting service then you need to have some page that
shows if a website does not exist on your hosting.
It was deleted, suspended, expired or because of invalid DNS configuration.
It's like a 404 page, but for the whole domain.

[DEMO IS HERE](https://walitoff.github.io/website-not-found/)

## Sample Screenshots

White theme:
![cover-fox](https://user-images.githubusercontent.com/16267156/228639743-9014d738-6094-4c04-8104-42767944e810.jpg)

Dark theme:
![cover-black](https://user-images.githubusercontent.com/16267156/228639882-75735f9c-f422-4f8d-ae2e-5a92aeb2aa23.jpg)

## Features

This projects allows to generate a simple page for that with the following
features.

*   single page only, just use resulting `index.html`.
    All styles and JS are integrated in page.
*   multilingual support with automatic preferred user language detection.
    Can correctly handle cases when user has complex set of preferred
    languages with different locales such as "en-GB", "en-US", etc.
*   responsive design
*   tests cover all major JS code

## Technical details

The project is made with Hugo for website generation, UIkit for UI, Jest for testing.

## How to compile

1.  Configure the website options in `/src/config.toml`.
2.  Adjust texts to your needs or add translations in `/src/data/`.
    To order the languages use the `weight` parameter.
3.  Optionally add your own CSS in `/src/layours/partials/styles.css`
4.  Optionally run tests with Jest if you modify the JS code: `npm test`
5.  Build the page with Hugo, run `hugo --minify` in `/src/` directory.
    The generated page will be in `/src/public/index.html`.

## Contributions

All contributions are welcome.
If you have something to add or share, please open an issue or a PR.
Code contribution guide is [here](.github/CONTRIBUTING.md).
