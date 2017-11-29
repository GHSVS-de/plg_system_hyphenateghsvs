# plg_system_hyphenateghsvs
Joomla-Plugin. Hyphenation for browsers that do NOT support CSS property hyphens (e.g. Chrome) or do not support languages you selected in this plugin.

This Joomla plugin...
...uses Hyphenate JavaScript library from https://github.com/mnater/Hyphenator provided by Mathias Nater (mnater).

You can report issues in english or german: https://github.com/GHSVS-de/plg_system_hyphenateghsvs/issues

See version history https://github.com/GHSVS-de/plg_system_hyphenateghsvs/wiki/Version-history-plg_system_hyphenateghsvs

See German manual: https://www.ghsvs.de/programmierer-schnipsel/joomla/191-joomla-silbentrennungs-plugin-hyphenateghsvs-fuer-doofe-browser

See short English description: https://extensions.joomla.org/extension/hyphenateghsvs/

## Don't forget to add:

### in your CSS file:
```
.hyphenate{
word-wrap: break-word;
-webkit-hyphens: auto;
-moz-hyphens: auto;
-ms-hyphens: auto;
-o-hyphens: auto;
hyphens: auto
}
.donthyphenate{
word-wrap: break-word;
-webkit-hyphens: none;
-moz-hyphens: none;
-ms-hyphens: none;
-o-hyphens: none;
hyphens: none
}
```
### or in your Bootstrap LESS
```
.hyphenate{
 .hyphens();
}
.donthyphenate{
 .hyphens(none);
}
```
