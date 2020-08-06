# plg_system_hyphenateghsvs

Joomla-Plugin.

Intelligent Hyphenation for browsers that do NOT support CSS property hyphens (e.g. Chrome) or do not support languages that you can select in this plugin. See supported languages at https://github.com/GHSVS-de/plg_system_hyphenateghsvs/tree/master/media/js/hyphenopoly/patterns

You can report issues, ask questions in english or german: https://github.com/GHSVS-de/plg_system_hyphenateghsvs/issues or via email (see https://ghsvs.de/kontakt)

## Build
- Adapt file `package.json`
- `npm install` or `npm update`
- `node build.js`
- New ZIP in folder `/dist/` afterwards.
- Only tested with WSL 1/Debian on WIndows 10.

### New release/update for Joomla
- Don't forget to link download to `/dist/...zip` inside tagged branch.

## Users should only use official releases!
- https://github.com/GHSVS-de/plg_system_hyphenateghsvs/releases

## Description/Documentation
You'll find detailed descriptions of all configuration options inside the plugin after installation.

## Uses since release 2019.03.10 recommended Hyphenopoly.js (besides old Hyphenater.js for updaters)!
https://github.com/GHSVS-de/plg_system_hyphenateghsvs/releases

## Version history
https://github.com/GHSVS-de/plg_system_hyphenateghsvs/wiki/Version-history-plg_system_hyphenateghsvs

## Thanks
This Joomla plugin...

...provides old Hyphenator JavaScript library from https://github.com/mnater/Hyphenator programmed by Mathias Nater (mnater).

...provides new Hyphenopoly JavaScript library from https://github.com/mnater/Hyphenopoly programmed by Mathias Nater (mnater).

