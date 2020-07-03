/**
 * @license Hyphenopoly 4.6.0 - client side hyphenation for webbrowsers
 * ©2020  Mathias Nater, Güttingen (mathiasnater at gmail dot com)
 * https://github.com/mnater/Hyphenopoly
 *
 * Released under the MIT license
 * http://mnater.github.io/Hyphenopoly/LICENSE
 */
((e,t)=>{"use strict";const n=(n=>{const r=new Map([["afterElementHyphenation",[]],["beforeElementHyphenation",[]],["engineReady",[]],["error",[t=>{t.runDefault&&e.console.warn(t)}]],["hyphenopolyEnd",[]],["hyphenopolyStart",[]]]);if(n.handleEvent){const e=new Map(t.entries(n.handleEvent));r.forEach((t,n)=>{e.has(n)&&t.unshift(e.get(n))})}return{fire:(e,t)=>{t.runDefault=!0,t.preventDefault=()=>{t.runDefault=!1},r.get(e).forEach(e=>{e(t)})}}})(Hyphenopoly);(e=>{function n(e){const t=new Map;function n(n){return t.has(n)?t.get(n):e.get(n)}function r(e,n){t.set(e,n)}return new Proxy(e,{get:(e,t)=>"set"===t?r:"get"===t?n:n(t),ownKeys:()=>[...new Set([...e.keys(),...t.keys()])]})}const r=n(new Map([["defaultLanguage","en-us"],["dontHyphenate",n(new Map("abbr,acronym,audio,br,button,code,img,input,kbd,label,math,option,pre,samp,script,style,sub,sup,svg,textarea,var,video".split(",").map(e=>[e,!0])))],["dontHyphenateClass","donthyphenate"],["exceptions",new Map],["keepAlive",!0],["normalize",!1],["processShadows",!1],["safeCopy",!0],["substitute",new Map],["timeout",1e3]]));t.entries(e.setup).forEach(([e,a])=>{switch(e){case"selectors":r.set("selectors",t.keys(a)),t.entries(a).forEach(([e,a])=>{const o=n(new Map([["compound","hyphen"],["hyphen","­"],["leftmin",0],["leftminPerLang",0],["minWordLength",6],["mixedCase",!0],["orphanControl",1],["rightmin",0],["rightminPerLang",0]]));t.entries(a).forEach(([e,n])=>{"object"==typeof n?o.set(e,new Map(t.entries(n))):o.set(e,n)}),r.set(e,o)});break;case"dontHyphenate":case"exceptions":t.entries(a).forEach(([t,n])=>{r.get(e).set(t,n)});break;case"substitute":t.entries(a).forEach(([e,n])=>{r.substitute.set(e,new Map(t.entries(n)))});break;default:r.set(e,a)}}),e.c=r})(Hyphenopoly),(r=>{const a=r.c;let o=null;function s(e,t){try{return e.getAttribute("lang")?e.getAttribute("lang").toLowerCase():"html"===e.tagName.toLowerCase()?t?o:null:s(e.parentNode,t)}catch(e){return null}}function l(o=null,l=null){const i=function(){const e=new Map,t=[0];return{add:function(n,r,a){const o={element:n,selector:a};return e.has(r)||e.set(r,[]),e.get(r).push(o),t[0]+=1,o},counter:t,list:e,rem:function(r){let o=0;e.has(r)&&(o=e.get(r).length,e.delete(r),t[0]-=o,0===t[0]&&(n.fire("hyphenopolyEnd",{msg:"hyphenopolyEnd"}),a.keepAlive||(window.Hyphenopoly=null)))}}}(),c=(()=>{let e="."+a.dontHyphenateClass;return t.getOwnPropertyNames(a.dontHyphenate).forEach(t=>{a.dontHyphenate.get(t)&&(e+=","+t)}),e})(),h=a.selectors.join(",")+","+c;function u(t,o,l,c=!1){const p=function(e,t){return e.lang&&"string"==typeof e.lang?e.lang.toLowerCase():t&&""!==t?t.toLowerCase():s(e,!0)}(t,o),g=r.cf.langs.get(p);"H9Y"===g?(i.add(t,p,l),!c&&a.safeCopy&&function(t){t.addEventListener("copy",t=>{t.preventDefault();const n=e.getSelection(),r=document.createElement("div");r.appendChild(n.getRangeAt(0).cloneContents()),t.clipboardData.setData("text/plain",n.toString().replace(/­/g,"")),t.clipboardData.setData("text/html",r.innerHTML.replace(/­/g,""))},!0)}(t)):g||n.fire("error",Error(`Element with '${p}' found, but '${p}.wasm' not loaded. Check language tags!`)),t.childNodes.forEach(e=>{1!==e.nodeType||e.matches(h)||u(e,p,l,!0)})}function p(e){a.selectors.forEach(t=>{e.querySelectorAll(t).forEach(e=>{u(e,s(e,!0),t,!1)})})}return null===o?(a.processShadows&&e.document.querySelectorAll("*").forEach(e=>{e.shadowRoot&&p(e.shadowRoot)}),p(e.document)):u(o,s(o,!0),l),i}n.fire("hyphenopolyStart",{msg:"hyphenopolyStart"});const i=new Map,c=new Map;function h(e,t,o){const s=r.languages.get(e),l=a.get(t),h=l.minWordLength,u=RegExp(`[${s.alphabet}a-zß-öø-þāăąćĉčďđēėęěĝğģĥīįıĵķļľłńņňōőœŕřśŝşšťūŭůűųźżžſǎǐǒǔǖǘǚǜșțʼΐά-ώϐϣϥϧϩϫϭϯϲа-яё-ќўџґүөա-օևअ-ऌएऐओ-नप-रलळव-हऽॠॡঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹઅ-ઋએઐઓ-નપ-રલળવ-હઽૠଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହୠୡஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-வஷ-ஹఅ-ఌఎ-ఐఒ-నప-ళవ-హౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡഅ-ഌഎ-ഐഒ-നപ-ഹൠൡൺ-ൿก-ฮะาำเ-ๅა-ჰሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏḍḷṁṃṅṇṭἀ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾲ-ᾴᾶᾷῂ-ῄῆῇῒΐῖῗῢ-ῧῲ-ῴῶῷⲁⲃⲅⲇⲉⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⳉⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ­​-‍-]{${h},}`,"gui");function p(r){a.normalize&&(r=r.normalize("NFC"));let o=r.replace(u,function e(t,r,o){const s=r+"-"+o;if(i.has(s))return i.get(s);const l=a.get(o);function c(a){let s=t.cache.get(o).get(a);var i;return s||(s=t.exc.has(a)?t.exc.get(a).replace(/-/g,l.hyphen):!l.mixedCase&&(i=a,[...i].map(e=>e===e.toLowerCase()).some((e,t,n)=>e!==n[0]))?a:-1===a.indexOf("-")?function(e){if(e.length>61)n.fire("error",Error("Found word longer than 61 characters"));else if(!t.reNotAlphabet.test(e))return t.hyphenate(e,l.hyphen.charCodeAt(0),l.leftminPerLang.get(r),l.rightminPerLang.get(r));return e}(a):function(n){let a=null,s=null;return"auto"===l.compound||"all"===l.compound?(s=e(t,r,o),a=n.split("-").map(e=>e.length>=l.minWordLength?s(e):e),n="auto"===l.compound?a.join("-"):a.join("-​")):n=n.replace("-","-​"),n}(a),t.cache.get(o).set(a,s)),s}return t.cache.set(o,new Map),i.set(s,c),c}(s,e,t));return 1!==l.orphanControl&&(o=o.replace(/(\u0020*)(\S+)(\s*)$/,function(e){if(c.has(e))return c.get(e);const t=a.get(e);function n(e,n,r,a){return 3===t.orphanControl&&" "===n&&(n=" "),n+r.replace(RegExp(t.hyphen,"g"),"")+a}return c.set(e,n),n}(t))),o}let g=null;var f;return"string"==typeof o?g=p(o):o instanceof HTMLElement&&(f=o,n.fire("beforeElementHyphenation",{el:f,lang:e}),f.childNodes.forEach(e=>{3===e.nodeType&&/\S/.test(e.data)&&e.data.length>=h&&(e.data=p(e.data))}),r.res.els.counter[0]-=1,n.fire("afterElementHyphenation",{el:f,lang:e})),g}function u(t,o){const s=o.list.get(t);s?s.forEach(e=>{h(t,e.selector,e.element)}):n.fire("error",Error(`Engine for language '${t}' loaded, but no elements found.`)),0===o.counter[0]&&(e.clearTimeout(r.timeOutHandler),-1!==a.hide&&r.hide(0,null),n.fire("hyphenopolyEnd",{msg:"hyphenopolyEnd"}),a.keepAlive||(window.Hyphenopoly=null))}function p(e){let t="";return a.exceptions.has(e)&&(t=a.exceptions.get(e)),a.exceptions.has("global")&&(""===t?t=a.exceptions.get("global"):t+=", "+a.exceptions.get("global")),""===t?new Map:new Map(t.split(", ").map(e=>[e.replace(/-/g,""),e]))}r.unhyphenate=()=>(r.res.els.list.forEach(e=>{e.forEach(e=>{const t=e.element.firstChild;t.data=t.data.replace(RegExp(a[e.selector].hyphen,"g"),"")})}),Promise.resolve(r.res.els));const g=(()=>{if(e.TextDecoder){const e=new TextDecoder("utf-16le");return t=>e.decode(t)}return e=>String.fromCharCode.apply(null,e)})();r.res.DOM.then(()=>{o=s(e.document.documentElement,!1),o||""===a.defaultLanguage||(o=a.defaultLanguage);const t=l();r.res.els=t,t.list.forEach((e,n)=>{r.languages&&r.languages.has(n)&&r.languages.get(n).ready&&u(n,t)})}),r.res.he.forEach((e,t)=>{!function(e,t){const o=window.WebAssembly;e.w.then(n=>{if(n.ok){let t=n;return e.c>1&&(t=n.clone()),o.instantiateStreaming&&"application/wasm"===n.headers.get("Content-Type")?o.instantiateStreaming(t):t.arrayBuffer().then(e=>o.instantiate(e))}return Promise.reject(Error(`File ${t}.wasm can't be loaded from ${r.paths.patterndir}`))}).then((function(e){const s=e.instance.exports;let l=s.conv();l=function(e,n){return a.substitute.has(t)&&a.substitute.get(t).forEach((t,r)=>{const a=r.toUpperCase(),o=a===r?0:a.charCodeAt(0);e=n.subst(r.charCodeAt(0),o,t.charCodeAt(0))}),e}(l,s);const i={buf:s.mem.buffer,hw:o.Global?s.hwo.value:s.hwo,lm:o.Global?s.lmi.value:s.lmi,rm:o.Global?s.rmi.value:s.rmi,wo:o.Global?s.uwo.value:s.uwo};!function(e,t,o,s,l){a.selectors.forEach(t=>{const n=a.get(t);0===n.leftminPerLang&&n.set("leftminPerLang",new Map),0===n.rightminPerLang&&n.set("rightminPerLang",new Map),n.leftminPerLang.set(e,Math.max(s,n.leftmin,Number(n.leftminPerLang.get(e))||0)),n.rightminPerLang.set(e,Math.max(l,n.rightmin,Number(n.rightminPerLang.get(e))||0))}),r.languages||(r.languages=new Map),o=o.replace(/-/g,""),r.languages.set(e,{alphabet:o,cache:new Map,exc:p(e),hyphenate:t,ready:!0,reNotAlphabet:RegExp(`[^${o}]`,"gi")}),r.hy6ors.get(e).resolve(function(e){return(t,r=".hyphenate")=>("string"!=typeof t&&n.fire("error",Error("This use of hyphenators is deprecated. See https://mnater.github.io/Hyphenopoly/Hyphenators.html")),h(e,r,t))}(e)),n.fire("engineReady",{lang:e}),r.res.els&&u(e,r.res.els)}(t,function(e,t){const n=new Uint16Array(e.buf,e.wo,64),r=new Uint16Array(e.buf,e.hw,128);return(e,a,o,s)=>(n.set([95].concat([...e].map(e=>e.charCodeAt(0)),95,0)),1===t(o,s,a)&&(e=g(r.subarray(1,r[0]+1))),e)}(i,s.hyphenate),g(new Uint16Array(s.mem.buffer,1026,l-1)),i.lm,i.rm)}),e=>{n.fire("error",e),r.res.els.rem(t)})}(e,t)}),Promise.all([...r.hy6ors.entries()].reduce((e,t)=>"HTML"!==t[0]?e.concat(t[1]):e,[]).concat(r.res.DOM)).then(()=>{r.hy6ors.get("HTML").resolve((e,t=".hyphenate")=>(l(e,t).list.forEach((e,t)=>{e.forEach(e=>{h(t,e.selector,e.element)})}),null))},e=>{n.fire("error",e)})})(Hyphenopoly)})(window,Object);