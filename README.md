# plg_system_hyphenateghsvs

Joomla-Plugin.

Intelligent Hyphenation for browsers that do NOT support CSS property `hyphens` or do not support languages that you can select in this plugin. See supported languages at https://github.com/GHSVS-de/plg_system_hyphenateghsvs/tree/master/media/js/hyphenopoly/patterns

You can report issues, ask questions in english or german: https://github.com/GHSVS-de/plg_system_hyphenateghsvs/issues or via email (see https://ghsvs.de/kontakt)

## Description/Documentation
You'll find detailed descriptions of all configuration options inside the plugin after installation.

## Uses since release 2019.03.10 **recommended** Hyphenopoly.js (besides old Hyphenater.js for updaters)!
https://github.com/GHSVS-de/plg_system_hyphenateghsvs/releases

## Version history
https://github.com/GHSVS-de/plg_system_hyphenateghsvs/wiki/Version-history-plg_system_hyphenateghsvs

## Thanks
This Joomla plugin...

...provides old Hyphenator JavaScript library from https://github.com/mnater/Hyphenator programmed by Mathias Nater (mnater).

...provides new Hyphenopoly JavaScript library from https://github.com/mnater/Hyphenopoly programmed by Mathias Nater (mnater).

# My personal build procedure (WSL 1, Debian, Win 10)

**@since v2022.06.22: Build procedure uses local repo fork of https://github.com/GHSVS-de/buildKramGhsvs**

- Prepare/adapt `./package.json`.
- `cd /mnt/z/git-kram/plg_system_hyphenateghsvs`

## node/npm updates/installation
- `npm install` (if never done before)

### Update dependencies
- `npm run updateCheck` or (faster) `npm outdated`
- `npm run update` (if needed) or (faster) `npm update --save-dev`

## PHP Codestyle
If you think it's worth it.
- `cd /mnt/z/git-kram/php-cs-fixer-ghsvs`
- `npm run plg_system_hyphenateghsvsDry` (= dry test run).
- `npm run plg_system_hyphenateghsvs` (= cleans code).
- `cd /mnt/z/git-kram/plg_system_hyphenateghsvs` (back to this repo).

## Build installable ZIP package
- `node build.js`
- New, installable ZIP is in `./dist` afterwards.
- All packed files for this ZIP can be seen in `./package`. **But only if you disable deletion of this folder at the end of `build.js`**.

### For Joomla update and changelog server
- Create new release with new tag.
- - See and copy and complete release description in `dist/release.txt`.
- Extracts(!) of the update and changelog XML for update and changelog servers are in `./dist` as well. Copy/paste and make necessary additions.
